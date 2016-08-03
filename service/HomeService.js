app.service('HomeService', function ($rootScope) {
    return {
        // index
        index: function () {
            return [
                {'id': 1, 'name': 'small5', 'sex': 1, 'age': 26},
                {'id': 2, 'name': 'small6', 'sex': 0, 'age': 27},
                {'id': 3, 'name': 'small7', 'sex': 1, 'age': 28}
            ];
        },

        // store
        store: function (users) {
            return this.index().push(users);
        },
    }
});