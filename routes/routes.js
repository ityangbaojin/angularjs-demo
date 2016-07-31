app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/home', {
            templateUrl : 'views/home.html',
            controller  : 'HomeController'
        })
        .when('/about', {
            template : 'This is About...'
        })
        .otherwise({
            // redirectTo : '/home'
            template : 'Welcome...'
        });
}]);