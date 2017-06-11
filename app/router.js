app.angularStartKit.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
    // For any unmatched url, redirect to /
    $urlRouterProvider.otherwise("/");
    // Now set up the states
    $stateProvider
      .state('home', {
          url: "/",
          templateUrl: 'app/home/views/home.html'
      })
         .state('error', {
             url: '/error',
             controller: function ($window, $timeout) {
                 $timeout(function () {
                     $window.location.href = '/error.html';
                 }, 10);
             }
         })
         .state('404', {
             url: '/404',
             controller: function ($window, $timeout) {
                 $timeout(function () {
                     $window.location.href = '/404.html';
                 }, 10);
             }
         })
      .state('login', {
          url: "/login/:clientId?retUrl",
          params: {
              clientId: 'default',
              retUrl: '/'
          },
          resolve: {
              getloginUrl: function ($stateParams) {
                  return '/login/index.html?' + $.param($stateParams);
              }
          },
          controller: function ($window, $timeout, getloginUrl) {
              $timeout(function () {
                  $window.location.href = getloginUrl;
              }, 10);
          }
      });
}]);
app.angularStartKit.run(['$rootScope', '$location', '$state', '$window', 'authService', '$timeout', function ($rootScope, $location, $state, $window, authService, $timeout) {
    $rootScope.$on('$stateChangeStart', function (e, toState, toParams, fromState, fromParams) {
        //safe list
        if (["error", "404", "faq"].indexOf(toState.name) != -1) {
            return; // no need to authenticate 
        }
        //authorized pages
        $timeout(function () {
            if (authService.isAuthenticated()) {
                authService.userInitialize();
            }
            else {
                e.preventDefault(); // stop current execution
                $state.go("login", $.param(toParams)); // go to login
            }
        }, 10);
    });
}]);