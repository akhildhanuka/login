const i18n = require('./../../i18n/login.i18n.js');


export default function recoveryController($window, $log, $state, $stateParams, configData,
                                           parameterService, baseEndpoint) {
    'ngInject';

    var vm = Object.assign(this, $stateParams);

    vm.env = $stateParams.env || 'live';
    vm.debug = $stateParams.debug || 'false';
    parameterService.set('env', vm.env);
    parameterService.set('debug', vm.debug);
    vm.i18n = i18n['recover-password'];
    vm.recover = recover.bind(this);

    function recover() {
        vm.error = false;
        vm.errorMessage = '';
        $stateParams.username = vm.username;
        $stateParams.password = vm.password;

        if (isValidation(vm.email)) {

        var url = configData.RecoverPasswordUri;
        baseEndpoint(url, true)
          .post({
            emailAddress: vm.email
          })
          .then((status) => {
            if (status.IsError === false) {
              $('#ppp-recover-form-container') // jshint ignore:line
                .empty()
                .html('<h4 class="thanks-msg">' + vm.i18n['thanks-msg'] + '</h4>');
            }
          })
          .catch((error) => {
            vm.error = true;
            vm.errorMessage = vm.i18n['error-email'];
          });
      } else {
        vm.error = true;
        vm.errorMessage = vm.i18n['error-email'];
      }
    }

    function isValidation(email) {
        var reg = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
        var userEmailId = $('#ppp-recover-email'); // jshint ignore:line

        if (email === '' || reg.test(email) === '') {
            userEmailId.focus();
            return false;
        } else {
            return true;
        }
    }
}
