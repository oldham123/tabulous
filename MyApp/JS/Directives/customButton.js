app.directive('customButton', function($timeout) {
    return {
        restrict: 'C',
            link: function ($scope, $element, $attr) {
        
            $scope.mouseActive = false;
            $element.on('mousedown', function() {
                $scope.mouseActive = true;
                $timeout(function(){
                    $scope.mouseActive = false;
                }, 100);
            })
            .on('focus', function() {
            if($scope.mouseActive === false) { 				
                $element.addClass('focused'); 
            }
        })
        .on('blur', function() { $element.removeClass('focused'); 
        });
        }
  }
});