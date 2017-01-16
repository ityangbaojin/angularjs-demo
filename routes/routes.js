app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('home');
    $stateProvider
        .state('home', {
            url : '/home',
            templateUrl : 'views/home.html',
            data: {pageTitle: 'Home'},
            controller : 'HomeController',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'app',
                        files: [
                            'controllers/HomeController.js',
                            'service/HomeService.js'
                        ]
                    });
                }]
            }
        })


        .state('about', {
            url: '/about',
            templateUrl: 'views/about.html',
            data: {pageTitle: 'About'},
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
            template : '<h3>ityangbaojin.github.io</h3>',
            data: {pageTitle: 'Blog'},
        })

        .state('up', {
            url: '/up',
            templateUrl: 'views/up.html',
            data: {pageTitle: 'Up'},
            controller: 'UpController',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'app',
                        files: [
                            'controllers/UpController.js',
                            'assets/layout.css'
                        ]
                    })
                }]
            }
        })
}]);

// 页面加载运行
app.run(function($rootScope, $state) {
    $rootScope.$state = $state;
    // TODO
});
