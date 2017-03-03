"use strict";
const debug = require( "debug" )( "dpac:services.assessments" );
const _ = require( "lodash" );

const keystone = require( "keystone" );
const collection = keystone.list( "Assessment" );
const Service = require( "./helpers/Service" );
const constants = require("../models/helpers/constants");
const base = new Service( collection );
module.exports = base.mixin();

module.exports.listPublished = function listPublished( opts ){
  debug( "listPublished" );
  return base.list( _.defaults( opts, {
      state: constants.assessmentStates.PUBLISHED
    } ) )
    .exec();
};
