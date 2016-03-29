(function() {
  'use strict';

  angular
    .module('sistemaParticipacion')
    .controller('CursoController', CursoController);

  /** @ngInject */
  function CursoController($log, $stateParams, CursosService) {
      var vm = this;
    vm.curso = $stateParams.cursoId;
    $log.debug(vm.curso);

//Carga listas de alumnos

switch (vm.curso){
  case "1":
     CursosService.curso1().success(function(res){
        vm.lista = res;
        vm.titulo="Diseño Web Paralelo 1";

     });
    break;
  case "2":
    CursosService.curso2().success(function(res){
      vm.lista = res;
      vm.titulo="Diseño Web Paralelo 2";


    });

    break;
  case "3":
    break;
  case "4":
    break;

}
// modifica puntaje
    vm.puntaje = 0;

    vm.suma = function(){
      vm.puntaje ++;
      $log.debug("suma "+vm.puntaje);
    }
    vm.resta = function(){
      vm.puntaje --;
      $log.debug("resta "+vm.puntaje);
    }




  }
})();
