(function () {
  'use strict';

  angular
    .module('sistemaParticipacion')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('curso', {
        url: '/curso/:cursoId',
        templateUrl: 'app/views/curso.html',
        controller: 'CursoController',
        controllerAs: 'curso'
      })
      .state('alumno',{
        url:'/curso/:cursoId/:alumnoId',
        templateUrl:'app/views/alumno.html',
        controller:'AlumnoController',
        controllerAs:'alumno'
      })
    ;

    $urlRouterProvider.otherwise('/');
  }

})();
