"use strict";
var _ = require( "lodash" );
var keystone = require( "keystone" );
var path = require( "path" );
const grappling = require( 'grappling-hook' );
const P = require( 'bluebird' );

module.exports = function( list ){
  var builder = {
    _config: undefined,
    _exposed: undefined,
    _guarded: undefined,
    idField: "_id",
    get: function( settingsName ){
      return this[ settingsName ];
    },
    set: function( settingsName,
                   value ){
      this[ settingsName ] = value;
      return this;
    },
    add: function( config ){
      builder._config = _.toArray( arguments );
      list.add.apply( list, builder._config );
      return builder;
    },
    emit: function( hooks ){
      const docs = {};
      if( !list.events ){
        list.events = grappling.create( {
          createThenable: function( fn ){
            return new P( fn );
          },
          qualifiers: {
            pre: 'change',
            post: 'changed'
          }
        } );
        list.events.on = list.events.hook;
        list.schema.pre( 'save', function( done ){
          const doc = this; //eslint-disable-line no-invalid-this
          const obj = JSON.parse( JSON.stringify( doc ) );
          const promises = [];
          const modified = doc.modifiedPaths();
          _.each( modified, ( path )=>{
            if( list.events.hookable( 'change:' + path ) && list.events.hasMiddleware( 'change:' + path ) ){
              promises.push( list.events.callThenableHook( doc, 'change:' + path, doc, {
                updated: _.get( obj, path ),
                original: _.get( doc.__original, path )
              } ) );
            }
            if( list.events.hookable( 'changed:' + path ) && list.events.hasMiddleware( 'changed:' + path ) ){

              const id = JSON.parse( JSON.stringify( doc.id ) );
              docs[ id ] = docs[ id ] || [];
              docs[ id ].push( {
                doc: doc,
                diff: {
                  updated: _.get( obj, path ),
                  original: _.get( doc.__original, path )
                },
                event: 'changed:' + path
              } );
            }
          } );
          P.all( promises ).asCallback( done );
        } );
        list.schema.post( 'save', function( doc ){
          const id = JSON.parse( JSON.stringify( doc.id ) );
          const queue = docs[ id ];
          if( queue ){
            const promises = [];
            delete docs[ id ];
            _.each( queue, ( obj )=>{
              promises.push( list.events.callThenableHook( obj.doc, obj.event, obj.doc, obj.diff ) );
            } );
            P.all( promises );
          }
        } );

      }
      list.events.allowHooks( _.toArray( arguments ) );
      return builder;
    },
    virtualize: function( virtuals ){
      var args = _.flattenDeep( _.toArray( arguments ) );
      _.forEach( args, function( arg ){
        _.forEach( arg, function( virtualizer,
                                  field ){
          if( _.isFunction( virtualizer ) ){
            list.schema.virtual( field ).get( virtualizer );
          } else if( _.isObject( virtualizer ) ){
            list.schema.virtual( field ).get( virtualizer.get ).depends = virtualizer.depends;
          }
        } );
      } );
      return builder.expose( _.keys( virtuals ) );
    },
    retain: function( fields ){
      var args = _.flattenDeep( _.toArray( arguments ) );
      args = _.reduce( args, function( memo,
                                       arg ){
        if( "track" === arg ){
          memo = memo.concat( "createdBy", "createdAt", "updatedBy", "updatedAt" );
        } else {
          memo.push( arg );
        }
        return memo;
      }, [] );
      if( builder._guarded ){
        args = builder._guarded.concat( args );
      }
      builder._guarded = args;
      return builder;
    },
    expose: function( fields ){
      var args = _.flattenDeep( _.toArray( arguments ) );
      fields = _.reduce( args, function( memo,
                                         arg ){
        if( _.isObject( arg ) ){
          memo = memo.concat( _.isArray( arg )
            ? arg
            : _.keys( arg ) );
        } else {
          memo.push( arg );
        }
        return memo;
      }, [] );
      if( !builder._exposed ){
        builder._exposed = fields;
        if( !list.schema.options.toJSON ){
          list.schema.options.toJSON = {};
        }

        list.schema.options.toJSON.transform = function( doc,
                                                         ret,
                                                         options ){
          _.forEach( builder._exposed, function( exposed ){
            var parts = exposed.split( "." );
            if( 1 < parts.length ){
              var dr = doc;
              var rr = ret;
              _.times( parts.length - 1, function( i ){
                var part = parts[ i ];
                rr[ part ] = {};
                rr = rr[ part ];
                dr = dr[ part ];
              } );
              var last = parts[ parts.length - 1 ];
              rr[ last ] = dr[ last ];
            } else {
              ret[ exposed ] = doc[ exposed ];
            }
          } );
          _.forEach( builder._guarded, function( guarded ){
            delete ret[ guarded ];
          } );
          return ret;
        };
      } else {
        builder._exposed = builder._exposed.concat( fields );
      }
      return builder;
    },
    relate: function( relationships ){
      relationships = _.flattenDeep( _.toArray( arguments ) );
      _.forEach( relationships, function( relConfig ){
        list.relationship( relConfig );
      } );
      return builder;
    },
    validate: function( map ){
      _.forEach( map, function( mixed,
                                field ){
        if( _.isFunction( mixed ) ){
          mixed = [ mixed ];
        }
        var p = list.schema.path( field );
        p.validate.apply( p, mixed );
      } );
      return builder;
    },
    register: function(){
      builder.virtualize( {
        type: function(){
          return list.plural.toLocaleLowerCase();
        },
        "links.self": function(){
          var a = keystone.get( "api root" ) || "/";
          var b = list.plural.toLocaleLowerCase();
          var c = this[ builder.get( 'idField' ) ].toString();
          return path.join( a, b, c );
        }
      } );
      if( list.options.toJSON && list.options.toJSON.transformations ){
        builder.expose( _.keys( list.options.toJSON.transformations ) );
      }
      list.schema.post( 'init', function(){
        this.__original = JSON.parse( JSON.stringify( this ) ); //eslint-disable-line no-invalid-this
      } );
      list.register();
    },
    getFieldNames: function(){
      return _.keys( builder._config );
    }
  };
  return builder.retain( "__v" );
};
