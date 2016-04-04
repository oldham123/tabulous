app.directive('sizeWatcher', ['$timeout', function($timeout) {
    return {
        scope: {
            sizeWatcherTop: '='
        },
        link: function(scope, elem, attrs){
            function checkSize(){
                if((scope.sizeWatcherTop != elem.prop('offsetTop')) || (parseInt(elem.prop('offsetTop')) == 0)) {
                scope.sizeWatcherTop = elem.prop('offsetTop');
                $timeout(checkSize, 5);
                }
                else {
                    scope.finishedChecking = "true";
                }
            }
            if((scope.finishedChecking == "false") || (parseInt(elem.prop('offsetTop')) == 0)) {
                checkSize();
            }
            else {
            }
        }
    };
}]);