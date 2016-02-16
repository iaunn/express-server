(function(angular, undefined) {
'use strict';

angular.module('expressApp.constants', [])

.constant('appConfig', {userRoles:['guest','user','admin']})

;
})(angular);