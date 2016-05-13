app.directive('watchWidth', ['$timeout', function($timeout) {
    return {
        scope: {
            widthWatcherWidth: '='
        },
        link: function(scope, elem, attrs){
            function checkSize(){
                if((scope.widthWatcherWidth != elem.prop('offsetWidth')) || (parseInt(elem.prop('offsetWidth')) == 0)) {
                    scope.widthWatcherWidth = elem.prop('offsetWidth');
                    $timeout(checkSize, 5);
                }
                else {
                    scope.finishedChecking = "true";
                    elem.css('left', Length.toPx(document.getElementById('initial-create-button'), '60vw') - 0.5*elem.prop('offsetWidth') + "px");
                }
            }
            if((scope.finishedChecking == "offsetWidth") || (parseInt(elem.prop('offsetWidth')) == 0)) {
                checkSize();
            }
            else {
            }
        }
    };
}]);