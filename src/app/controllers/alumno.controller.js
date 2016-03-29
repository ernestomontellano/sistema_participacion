(function() {
  'use strict';

  angular
    .module('sistemaParticipacion')
    .controller('AlumnoController', AlumnoController);

  /** @ngInject */
  function AlumnoController($log, $stateParams, CursosService) {
    var vm = this;
    vm.curso = $stateParams.cursoId;
    vm.al = $stateParams.alumnoId;
  $log.debug(vm.curso);
    switch (vm.curso){
      case "1":
        CursosService.curso1().success(function(res){

          vm.lista = res;
          vm.titulo="Diseño Web Paralelo 1";
          vm.encontrado = 0;
          vm.alumno = [];
          vm.posicion = 0;
          for(var i=0; i<vm.lista.length; i++){
            if(vm.lista[i].id == vm.al){
              vm.encontrado ++;
              vm.posicion = i;
            }
          }
          if(vm.encontrado>0){
            vm.alumno = vm.lista[vm.posicion];
            $log.debug(vm.alumno);

          }
        });
        break;
      case "2":
        CursosService.curso2().success(function(res){
          vm.lista = res;
          vm.titulo="Diseño Web Paralelo 2";
          vm.encontrado = 0;
          vm.alumno = [];
          vm.posicion = 0;
          for(var i=0; i<vm.lista.length; i++){
            if(vm.lista[i].id == vm.al){
              vm.encontrado ++;
              vm.posicion = i;
            }
          }
          if(vm.encontrado>0){
            vm.alumno = vm.lista[vm.posicion];
            $log.debug(vm.alumno);

          }

        });

        break;
      case "3":
        break;
      case "4":
        break;

    }



  }
})();
