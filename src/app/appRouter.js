const angular = require('angular')

angular.module('app')
  .config(appRouter)

appRouter.$inject = ['$urlRouterProvider', '$locationProvider']

/* @ngInject */
function appRouter ($urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  })

  $urlRouterProvider.otherwise('/')
}

// routes from modules
