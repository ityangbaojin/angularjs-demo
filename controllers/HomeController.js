app.controller('HomeController', function($scope) {
    $scope.users = [
        {'id' : 1, 'name' : '小明', 'sex' : 1, 'age' : 26},
        {'id' : 2, 'name' : '小红', 'sex' : 0, 'age' : 27},
        {'id' : 3, 'name' : '小绿', 'sex' : 1, 'age' : 28}
    ];
    // 添加
    $scope.add = function() {
        var name = $scope.name;
        var addData = {'id' : $scope.users.length + 1, 'name' : name, 'sex' : 1, 'age' : 30};
        $scope.users.push(addData);
        $('#add').modal('hide');
    }

    // 删除
    $scope.del = function(id) {
        if (confirm('您确定要删除吗?')) {
            angular.forEach($scope.users, function(value, key) {
                if (value.id == id) {
                    $scope.users.splice(key, 1);
                    return;
                }
            });
        }
    }

    // 修改
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