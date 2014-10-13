'use strict';

var _ = require( 'underscore' );
var keystone = require( 'keystone' ),
  Types = keystone.Field.Types;

var Timelog = new keystone.List( 'Timelog', {
  map   : {
    name : 'id'
  },
  track : true
} );

var config = {

  type : {
    type     : Types.Relationship,
    ref      : 'Phase',
    required : true,
    initial  : true
  },

  comparison : {
    type    : Types.Relationship,
    ref     : 'Comparison',
    require : true,
    initial : true
  },

  duration : {
    type     : Number,
    default  : 0,
    required : true,
    initial  : true
  },

  times : {
    type     : Types.Relationship,
    ref      : 'Timerange',
    initial  : true,
    required : true,
    index    : true,
    many     : true
  }

};

Timelog.api = {
  creation : _.keys(config),
  editable : ['times']
};

Timelog.add( config );

Timelog.defaultColumns = 'name, type, duration';
Timelog.register();


