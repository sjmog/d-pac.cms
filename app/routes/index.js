/**
 * This file is where you define your application routes and controllers.
 *
 * Start by including the middleware you want to run for every request;
 * you can attach middleware to the pre("routes") and pre("render") events.
 *
 * For simplicity, the default setup for route controllers is for each to be
 * in its own file, and we import all the files in the /routes/views directory.
 *
 * Each of these files is a route controller, and is responsible for all the
 * processing that needs to happen for the route (e.g. loading data, handling
 * form submissions, rendering the view template, etc).
 *
 * Bind each route pattern your application should respond to in the function
 * that is exported from this module, following the examples below.
 *
 * See the Express application routing documentation for more information:
 * http://expressjs.com/api.html#app.VERB
 */

var _ = require( "underscore" );
var keystone = require( "keystone" );
var appMw = require( "./middleware" );
var importRoutes = keystone.importer( __dirname );

// Common Middleware
keystone.pre( "routes", appMw.initLocals );
keystone.pre( "render", appMw.flashMessages );

// Import Route Controllers
var routes = {
  views: importRoutes( "./views" ),
  api: importRoutes( "./api" )
};
var api = routes.api;
var apiMw = api.helpers.middleware;
var registerDefaultRoutes = api.helpers.registerDefaultRoutes;
var initCORS = apiMw.createCors();

// Setup Route Bindings
exports = module.exports = function( app ){
  var apiRoot = keystone.get( "api root" );

  // Views
  app.get( "/", routes.views.index );
  //app.get( "/blog/:category?", routes.views.blog );
  //app.get( "/blog/post/:post", routes.views.post );
  app.get( '/content/:page', routes.views.page );
  app.all( "/contact", routes.views.contact );

  // # REST API

  // -- API setup --
  app.route( apiRoot + "*" )
    .all( appMw.reflectReq )
    .all( apiMw.initAPI )
    .all( initCORS );

  app.route( apiRoot + "/session" )
    .get( api.authentication.status )
    .post( apiMw.requireParams( "email", "password" ) )
    .post( api.authentication.signin )
    .delete( apiMw.requireUser )
    .delete( api.authentication.signout );

  app.route( apiRoot + "/user" )
    .all( apiMw.requireUser )
    .all( apiMw.setIdParamToUser )
    .get( api.users.retrieve )
    .patch( api.users.update );

  app.route( apiRoot + "/user/assessments" )
    .all( apiMw.requireUser )
    .all( apiMw.setIdParamToUser )
    .get( api.users.listAssessments );

  app.route( apiRoot + "/user/mementos" )
    .all( apiMw.requireUser )
    .all( apiMw.setIdParamToUser )
    .get( api.users.listMementos );

  app.route( apiRoot + "/user/comparisons" )
    .all( apiMw.requireUser )
    .all( apiMw.setIdParamToUser )
    .get( api.users.listComparisons )

  app.route( apiRoot + "/mementos" )
    .all( apiMw.requireUser )
    .post( apiMw.requireParams( "assessment" ) )
    .post( api.mementos.create );

  app.route( apiRoot + "/phases" )
    .all( apiMw.requireUser )
    .get( api.phases.list );

  app.route( apiRoot + "/pages" )
    .get( api.pages.list );
  app.route( apiRoot + "/pages/:slug" )
    .get( api.pages.retrieve );

  app.route( apiRoot + "/representations" )
    .all( apiMw.requireUser )
    .get( api.representations.list );
  app.route( apiRoot + "/representations/:_id" )
    .all( apiMw.requireUser )
    .get( api.representations.retrieve );

  registerDefaultRoutes( apiRoot + "/assessments",
    app, {
      all: [ apiMw.requireUser, apiMw.requireAdmin ],
      controller: api.assessments
    } );

  registerDefaultRoutes( apiRoot + "/documents",
    app, {
      all: [ apiMw.requireUser, apiMw.requireAdmin ],
      controller: api.documents
    } );

  registerDefaultRoutes( apiRoot + "/users",
    app, {
      all: [ apiMw.requireUser, apiMw.requireAdmin ],
      controller: api.users
    } );

  registerDefaultRoutes( apiRoot + "/comparisons",
    app, {
      all: [ apiMw.requireUser, apiMw.requireAdmin ],
      controller: api.comparisons
    } );

  registerDefaultRoutes( apiRoot + "/timelogs",
    app, {
      all: [ apiMw.requireUser, apiMw.requireAdmin ],
      controller: api.timelogs
    } );

  registerDefaultRoutes( apiRoot + "/organizations",
    app, {
      all: [ apiMw.requireUser, apiMw.requireAdmin ],
      controller: api.organizations
    } );

  // -- API fallback --
  app.all( apiRoot + "*", apiMw.methodNotAllowed );
  app.use( apiMw.handleError );
};
