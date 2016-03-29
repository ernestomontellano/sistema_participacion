(function() {
  'use strict';

  angular
    .module('sistemaParticipacion')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
