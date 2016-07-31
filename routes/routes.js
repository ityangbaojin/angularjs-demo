app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('home');
    $stateProvider
        .state('home', {
            url : '/home',
            templateUrl : 'views/home.html',
            controller : 'HomeController',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'app',
                        files: [
                            'controllers/HomeController.js'
                        ]
                    });
                }]
            }
        })


        .state('about', {
            url: '/about',
            templateUrl: 'views/about.html',
            controller: 'AboutController',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'app',
                        files: [
                            'controllers/AboutController.js'
                        ]
                    })
                }]
            }
        })

        .state('blog', {
            url : '/blog',
            template : '<h3>ityangbaojin.github.io</h3>'
        })
}]);

// 页面加载运行
app.run(function($rootScope) {
    // TODO
});
