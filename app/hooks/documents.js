'use strict';

const P = require( 'bluebird' );
var keystone = require( "keystone" );
var representationsService = require( '../services/representations' );
const handleHook = require( './helpers/handleHook' );

function createRepresentation( document ){
  if( !document.representation ){
    return P.resolve();
  }
  if( !document.assessment ){
    return P.reject( new Error( 'Assessment is required if "Create representation" is checked.' ) );
  }
  return representationsService.create( {
      document: document.id,
      assessment: document.assessment
    } )
    .then( function( representation ){
      document.representation = false;
      document.assessment = null;
      return document.save();
    } );
}

module.exports.init = function(){
  keystone.list( 'Document' ).schema.post( 'save', handleHook( createRepresentation ) );
};
