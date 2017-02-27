const angular = require('angular')

angular
  .module('app')
  .factory('AppService', AppService)

AppService.$inject = []

/* @ngInject */
function AppService () {
  let pageTitle = 'TODO: Default app Page title'

  const service = {
    getPageTitle: getPageTitle,
    setPageTitle: setPageTitle

  }
  return service

  ////////////////

  function getPageTitle () {
    return pageTitle
  }

  function setPageTitle (newPageTitle) {
    pageTitle = newPageTitle
  }
}
