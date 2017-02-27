const angular = require('angular')
const uiRouter = require('angular-ui-router')
const uiBootstrap = require('angular-ui-bootstrap')
const ocLazyLoad = require('oclazyload')
const LocalStorageModule = require('angular-local-storage')

angular
  .module('app', [
    uiRouter,
    uiBootstrap,
    ocLazyLoad,
    LocalStorageModule
  ])

require('./appService')
require('./titleController')
require('./appRouter.js')
