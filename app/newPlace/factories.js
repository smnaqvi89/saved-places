angular.module('newPlace')
  .factory('newPlacePrompt', ['$mdDialog', '$mdMedia', function($mdDialog, $mdMedia) {
    return function($scope, ev) {
      var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'));

      $mdDialog.show({
        controller: 'NewPlaceCtrl',
        templateUrl: './app/newPlace/newPlaceTest.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: useFullScreen,
      })
      .then(
        function(answer) {
          // On answer
        }, 
        function() {
          // On cancel
        }
      );
    }
  }])