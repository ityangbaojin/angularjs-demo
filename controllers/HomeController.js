app.controller('HomeController', function($scope, HomeService) {
    // index
    index();
    function index() {
        var home = HomeService.getHome();
        if (home.code === 1000) {
             $scope.users = home.data;
        }
    }

    // get id data
    $scope.getIdHome = function(id) {
        $scope.getIdHomeData = HomeService.getIdHome(id);
    }

    // store
    $scope.store = function() {
        var name = $scope.name;
        var sex  = Math.round(Math.random());
        var age  = Math.ceil(Math.random() * 25);
        HomeService.insertHome(name, sex, age);
        $('#add').modal('hide');
        $scope.name = '';
    }

    // destroy
    $scope.destroy = function(id) {
        if (confirm('Are you sure you want to delete?')) {
           HomeService.deleteHome(id);
        }
    }

    // update
    $scope.update = function(id) {
        var data = {'id' : id, 'name' : 'mac_' + id, 'sex' : Math.round(Math.random()), 'age' : Math.ceil(Math.random() * 25)};
        HomeService.updateHome(id, data);
    }

    /*var index = HomeService.index();
    index.then(function(data) { // 获取数据 .resolve
        if (data.code === 1000) {
            $scope.users = data.data;
        } else {
            console.log('No data...');
        }
    },function(data) {  // 处理错误 .reject
        console.log(data);
    });

    // store
    $scope.store = function() {
        var name = $scope.name;
        var addData = {'id' : $scope.users.length + 1, 'name' : name, 'sex' : Math.round(Math.random()), 'age' : 30};
        $scope.users.push(HomeService.store(addData));
        console.log($scope.users);
        $('#add').modal('hide');
    }

    // destroy
    $scope.destroy = function(id) {
        if (confirm('Are you sure you want to delete?')) {
            angular.forEach($scope.users, function(value, key) {
                if (value.id == id) {
                    $scope.users.splice(key, 1);
                    return;
                }
            });
        }
    }

    // update
    $scope.update = function(id) {
        var updateData = {'id' : id, 'name' : 'Mac' + id, 'sex' : 1, 'age' : 30};
        angular.forEach($scope.users, function(value, key) {
            if (value.id == id) {
                $scope.users[key] = updateData;
                return;
            }
        });
    }*/
});