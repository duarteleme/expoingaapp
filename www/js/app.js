angular.module('expoinga', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    super.setIntegerProperty("loadUrlTimeoutValue"}, 360000);

    // Check for network connection
    if(window.Connection) {
      if(navigator.connection.type == Connection.NONE) {
        $ionicPopup.confirm({
          title: 'Problemas de Conexão',
          content: 'Desculpe, Porfavor, cheque sua internet.'
        })
        .then(function(result) {
          if(!result) {
            navigator.app.exitApp();
          }
        });
      }
    }

    ionic.Platform.fullScreen();

    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (cordova.platformId == 'android') {
    StatusBar.backgroundColorByHexString("#322D3B");
    }
  });
})