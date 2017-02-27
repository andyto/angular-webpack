const angular = require('angular')

angular
  .module('app')
  .controller('TitleController', TitleController)

TitleController.$inject = ['AppService']

function TitleController (AppService) {
  const vm = this
  vm.getPageTitle = AppService.getPageTitle
}

