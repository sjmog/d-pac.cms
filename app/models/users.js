var _ = require( 'lodash' );
var keystone = require( "keystone" );
var Types = keystone.Field.Types;

/**
 * Users
 * =====
 */
var User = new keystone.List( "User" );
User.defaultColumns = "name, anonymized, email, isAdmin";

function hasAssessmentId( arr,
                          needleId ){
  return _.any( arr, function( assessmentId ){
    return assessmentId.equals( needleId );
  } );
}

User.schema.methods.isAssessorFor = function( assessmentId ){
  return hasAssessmentId( this.assessments.assessor, assessmentId );
};

User.schema.methods.isAssesseeFor = function( assessmentId ){
  return hasAssessmentId( this.assessments.assessee, assessmentId );
};

User.schema.plugin( require( "./helpers/autoinc" ).plugin, {
  model: "User",
  field: "_rid",
  startAt: 1
} );

require( './helpers/setupList' )( User )
  .add( {
    _rid: {
      type: Number,
      noedit: true,
      label: 'Unique number',
      note: 'Used for anonymization'
    },
    name: {
      type: Types.Name,
      required: true,
      index: true
    },
    organization: {
      type: Types.Relationship,
      ref: "Organization",
      index: true,
      initial: true
    },
    email: {
      type: Types.Email,
      initial: true,
      required: true,
      index: true
    },
    password: {
      type: Types.Password,
      initial: true,
      required: false
    },
    assessments: {
      assessor: {
        type: Types.Relationship,
        ref: "Assessment",
        index: true,
        initial: false,
        required: false,
        many: true,
        label: "Assessor assessments",
        default: []
      },
      assessee: {
        type: Types.Relationship,
        ref: "Assessment",
        index: true,
        initial: false,
        required: false,
        many: true,
        label: "Assessee assessments",
        default: []
      },
      pam: {
        type: Types.Relationship,
        ref: "Assessment",
        index: true,
        initial: false,
        required: false,
        many: true,
        label: "PAM assessments",
        default: []
      }
    }
  }, "Permissions", {
    isAdmin: {
      type: Boolean,
      label: "Can access Keystone",
      default: false
    }
  } )
  .virtualize( {
    canAccessKeystone: function(){
      return this.isAdmin;
    },
    anonymized: {
      get: function(){
        return 'user-' + _.padLeft( this._rid, 5, "0" );
      },
      depends: [ "_rid" ]
    }
  } )
  .retain( "password" )
  .relate( {
    path: "documents",
    ref: "Document",
    refPath: "owner",
    label: "Documents"
  }, {
    path: "comparisons",
    ref: "Comparison",
    refPath: "assessor",
    label: "Comparisons"
  } )
  .register();
