app.service('HomeService', function ($http, $q) {
    // get data
    this.getHome = function () {
        return homeData;
    }

    // insert data
    this.insertHome = function (name, sex, age) {
        var topID = homeData.data.length + 1;
        homeData.data.push({
            id: topID,
            name: name,
            sex: sex,
            age: age
        });
    }

    // delete data
    this.deleteHome = function (id) {
        for (var i = homeData.data.length - 1; i >= 0; i--) {
            if (homeData.data[i].id === id) {
                homeData.data.splice(i, 1);
                break;
            }
        }
    }

    // update data
    this.updateHome = function (id, updateData) {
        angular.forEach(homeData.data, function(value, key) {
            if (value.id == id) {
                homeData.data[key] = updateData;
                return;
            }
        });
    }

    // get id data
    this.getIdHome = function (id) {
        for (var i = 0; i < homeData.data.length; i++) {
            if (homeData.data[i].id === id) {
                return homeData.data[i];
            }
        }
        return null;
    }

    // 数据
    var homeData = {
      "code": 1000,
      "data": [
        {
          "id": 1,
          "name": "small5",
          "sex": 1,
          "age": 26
        },
        {
          "id": 2,
          "name": "small6",
          "sex": 0,
          "age": 25
        },
        {
          "id": 3,
          "name": "small7",
          "sex": 1,
          "age": 23
        }
      ]
    }


    /*return {
        index : function() {
            var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行
            var url = 'json/home.json';
            $http.get(url).
            success(function(data) {
                deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了
            }).
            error(function(data) {
                deferred.reject(data);   // 声明执行失败，即服务器返回错误
            });
            return deferred.promise;   // 返回promise对象，交由controller继续处理成功、失败的业务回调
        },
        store: function(users){
            return users;
        }
    }*/

    // AngularJS中使用$q同步读取服务器数据
    // http://blog.csdn.net/lglgsy456/article/details/32335127
    // http://www.jianshu.com/p/1e1aaf0fd30a

    /*var service = {
        // index
        /!*index: function () {
            return [
                {'id': 1, 'name': 'small5', 'sex': 1, 'age': 26},
                {'id': 2, 'name': 'small6', 'sex': 0, 'age': 27},
                {'id': 3, 'name': 'small7', 'sex': 1, 'age': 28}
            ];
        },*!/

        users: [
            {'id': 1, 'name': 'small5', 'sex': 1, 'age': 26},
            {'id': 2, 'name': 'small6', 'sex': 0, 'age': 27},
            {'id': 3, 'name': 'small7', 'sex': 1, 'age': 28}
        ],

        // store
        store: function (users) {
            service.users.push(users);
            $rootScope.$broadcast( 'books.update' );
        },
    }
    return service;*/

    /*this.index = function () {
        return [
            {'id': 1, 'name': 'small5', 'sex': 1, 'age': 26},
            {'id': 2, 'name': 'small6', 'sex': 0, 'age': 27},
            {'id': 3, 'name': 'small7', 'sex': 1, 'age': 28}
        ];
    }

    this.store = function (users) {
        return users;
        return this.index().push(users);
    }*/
});