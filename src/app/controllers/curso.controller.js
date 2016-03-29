(function() {
  'use strict';

  angular
    .module('sistemaParticipacion')
    .controller('CursoController', CursoController);

  /** @ngInject */
  function CursoController($log, $stateParams) {
      var vm = this;
    vm.curso = $stateParams.cursoId;
   $log.debug("ssss");
    $log.debug(vm.curso);

  }
})();
