app.controller('UpController', function($scope) {
    $scope.setFiles = function(element) {
        // console.log(element.files[0]);
        var reader = new FileReader();
        reader.readAsDataURL(element.files[0]);
        reader.onload = function(e) {
            $scope.$apply(function() {
                $scope.files = e.target.result;
            });
            console.log(e.target.result.split(',')[1]);
        };
    }
});