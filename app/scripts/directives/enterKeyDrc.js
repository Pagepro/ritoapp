'use strict';

// `ra` is alias for RitoApp
ritoApp.directive('raEnterkey', [
    function () {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {

                element.bind("keyup" , function (e) {
                    if (e.keyCode === 13) {
                        scope.$apply(attrs.raEnterkey);
                    }
                });
            }
        }
}]);
