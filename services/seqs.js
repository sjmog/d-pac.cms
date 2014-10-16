'use strict';
var debug = require( 'debug' )( 'dpac:services.seqs' );
var _ = require('underscore');
var keystone = require( 'keystone' );
var extend = require('deep-extend');
var Promise = require( 'bluebird' );
var schema = keystone.list('Seq');

module.exports.create = function( opts ){
  debug( '#create' );
  return schema.model.create( opts );
};

var listById = module.exports.listById = function listById(ids){
  return schema.model
    .find()
    .where( '_id' ).in( ids )
    .lean()
    .exec();
};

module.exports.list = function list( opts ){
  debug('list');
  if( _.isArray(opts)){
    return listById(opts);
  }

  return schema.model
    .find(opts)
    .lean()
    .exec();
};

/**
 *
 * @param opts
 * @param {string} opts._id Seq.id
 */
module.exports.update = function update( opts ){
  debug( 'update' );
  return schema.model
    .findById( opts._id )
    .exec()
    .then( function( doc ){
      if( !doc ){
        return;
      }
      extend( doc, opts );
      var save = Promise.promisify(doc.save, doc);
      return save();
    } );
};