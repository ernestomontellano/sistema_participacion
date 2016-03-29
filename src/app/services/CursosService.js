(function () {
  'use strict';

  angular
    .module('sistemaParticipacion')
    .factory('CursosService', function ($http) {
      return {
        curso1: function () {
          return $http.get('../app/resources/web1.json');
        },
        curso2: function () {
          return $http.get('../app/resources/web2.json');
        }
      };
    });


})();



