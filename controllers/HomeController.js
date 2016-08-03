app.controller('HomeController', function($scope, HomeService) {

    // Index
    $scope.users = HomeService.index();

    // store
    $scope.add = function() {
        var name = $scope.name;
        var addData = {'id' : $scope.users.length + 1, 'name' : name, 'sex' : 1, 'age' : 30};
        HomeService.store(addData);
        $('#add').modal('hide');
    }

    // destroy
    $scope.del = function(id) {
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
    }
});