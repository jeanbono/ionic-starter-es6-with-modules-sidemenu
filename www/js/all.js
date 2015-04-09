define("bootstrap", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.onReady = onReady;

  function onReady($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  }
});
define("router", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.router = router;

  function router($stateProvider, $urlRouterProvider) {
    $stateProvider.state("app", {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: "AppCtrl"
    }).state("app.search", {
      url: "/search",
      views: {
        menuContent: {
          templateUrl: "templates/search.html"
        }
      }
    }).state("app.browse", {
      url: "/browse",
      views: {
        menuContent: {
          templateUrl: "templates/browse.html"
        }
      }
    }).state("app.playlists", {
      url: "/playlists",
      views: {
        menuContent: {
          templateUrl: "templates/playlists.html",
          controller: "PlaylistsCtrl"
        }
      }
    }).state("app.single", {
      url: "/playlists/:playlistId",
      views: {
        menuContent: {
          templateUrl: "templates/playlist.html",
          controller: "PlaylistCtrl"
        }
      }
    });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise("/app/playlists");
  }
});
define('controllers/AppCtrl', ['exports'], function (exports) {
  'use strict';

  var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var AppCtrl = function AppCtrl($scope, $ionicModal, $timeout) {
    _classCallCheck(this, AppCtrl);

    this.$inject = ['$scope', '$ionicModal', '$timeout'];

    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function () {
      $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
      console.log('Doing login', $scope.loginData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function () {
        $scope.closeLogin();
      }, 1000);
    };
  };

  exports.AppCtrl = AppCtrl;
});
define('controllers/PlaylistCtrl', ['exports'], function (exports) {
  'use strict';

  var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var PlaylistCtrl = function PlaylistCtrl($scope, $stateParams) {
    _classCallCheck(this, PlaylistCtrl);

    this.$inject = ['$scope', '$stateParams'];
  };

  exports.PlaylistCtrl = PlaylistCtrl;
});
define('controllers/PlaylistsCtrl', ['exports'], function (exports) {
  'use strict';

  var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var PlaylistsCtrl = function PlaylistsCtrl($scope) {
    _classCallCheck(this, PlaylistsCtrl);

    this.$inject = ['$scope'];

    $scope.playlists = [{ title: 'Reggae', id: 1 }, { title: 'Chill', id: 2 }, { title: 'Dubstep', id: 3 }, { title: 'Indie', id: 4 }, { title: 'Rap', id: 5 }, { title: 'Cowbell', id: 6 }];
  };

  exports.PlaylistsCtrl = PlaylistsCtrl;
});
define('app', ['exports', 'bootstrap', 'router', 'controllers/AppCtrl', 'controllers/PlaylistsCtrl', 'controllers/PlaylistCtrl'], function (exports, _bootstrap, _router, _controllersAppCtrl, _controllersPlaylistsCtrl, _controllersPlaylistCtrl) {
  'use strict';

  angular.module('starter', ['ionic', 'starter.controllers', 'starter.services']).config(_router.router).run(_bootstrap.onReady);

  angular.module('starter.controllers', []).controller('AppCtrl', _controllersAppCtrl.AppCtrl).controller('PlaylistsCtrl', _controllersPlaylistsCtrl.PlaylistsCtrl).controller('PlaylistCtrl', _controllersPlaylistCtrl.PlaylistCtrl);

  angular.module('starter.services', []);
});
//# sourceMappingURL=all.js.map