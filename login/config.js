var baseUrl = baseUrl || 'http://localhost:1313/', identitySrv = identitySrv || 'http://localhost:44333/identity', loginUrl = 'http://localhost:1313/login/';

app.auth.constant('AUTH_EVENTS', {
    loginSuccess: 'auth-login-success',
    loginFailed: 'auth-login-failed',
    logoutSuccess: 'auth-logout-success',
    logoutFailed: 'auth-logout-failed',
    registrationSuccess: 'auth-registration-success',
    registrationFailed: 'auth-registration-failed',
    sessionTimeout: 'auth-session-timeout',
    notAuthenticated: 'auth-not-authenticated',
    notAuthorized: 'auth-not-authorized',
    notConnected: 'connection-not-established-to-server'
});


app.appSettings = {
    api: baseUrl + '/api/',
    authSrv: identitySrv + '/connect/token',
    refreshToken: identitySrv + '/token',
    userInfo: identitySrv + '/userInfo',
    authorizer: identitySrv + '/authorize',
    clientsConfig: '/login/authClients.json',
    contactusEmail: 'mohamed.abdo@gac.com',
    APP_EVENTS: {
        callerAppChanged: 'caller_app_changed',
        openContactSupportModal: 'open_contact_support_modal',
        openForgotPasswordModal: 'open_forgot_password_modal',
        openFAQModal: 'open_FAQ_modal'
    }
};


app.auth.value('cgBusyDefaults', {
    message: 'Please wait...',
    backdrop: true,
    templateUrl: '/login/shared/views/busy-template.html',
    delay: 300,
    minDuration: 1000,
    wrapperClass: 'well'
});
app.auth.config(['$httpProvider', '$locationProvider', '$sceDelegateProvider', function ($httpProvider, $locationProvider, $sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
         // Allow same origin resource loads.
         'self',
         // Allow loading from our assets domain.  Notice the difference between * and **.
         'https://*.gac.com/**'
    ]);
    $locationProvider.html5Mode(true);
    // allow cors
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common["X-Requested-With"];
    //
}]);

