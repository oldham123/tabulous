app.directive('fullScreenMorph', ['$timeout', function($timeout){
    var directive = {
        restrict: 'A',
        scope: false,
        link: createLink
    };

    return directive;
}]);

function createLink(scope, element, attr, main){
    var button = $('#initial-create-button');
    var oldButtonText = $('#initial-create-button-span');
    var formContainer = $('#create-form-container');
    
    $timeout = scope.main.timeOut;
    
    element.on('click', function () {
        if(!scope.main.createFormOpen)
        {
            velocity(oldButtonText, {
                "opacity": "0"
            }, {
                duration: 300,
                easing: "easeOutExpo",
            });
            velocity(button, {
                width: "100vw",
                height: "100vh",
                left: 0,
                top: 0,
                margin: 0
            }, {
                duration: 450,
                easing: "easeInOutCubic",
                queue: false,
                delay: 300,
                complete: function () {
                    scope.$apply(oldButtonText.addClass('not-present'));
                    scope.$apply(button.removeAttr('md-ink-ripple'));
                    scope.$apply(button.removeClass('md-ink-ripple'));
                    scope.$apply(button.attr('md-no-ink', ''));
                    scope.$apply($('.md-ripple-container').remove());
                    scope.$apply(formContainer.removeClass('not-present'));
                }
            });
            velocity(button, {
                height: "30vh"
            }, {
                duration: 750,
                easing: "easeInOutCubic",
                queue: false,
                delay: 750,
                complete: function () {
                    scope.$apply(scope.main.createFormOpen = true);
                    console.log("Finished!");
                    
                }
            });
        };
    });
    $('body').on('keyup', function (event) 
    {
        if (event.keyCode == 27 && scope.main.createFormOpen) 
        {
            scope.main.createFormClosing = true;
            scope.main.createFormOpen = false;
            velocity(formContainer, {
                'left': '20vw',
                'top': '30vh',
                'height': '70vh',
                'width': '80vw'
            }, {
                duration: 800,
                queue: false,
                easing: 'swing'
            });
            
            setTimeout( function() { velocity(formContainer, {
                    'opacity': '0'
                }, { 
                    duration: 250,
                    queue: false,
                    easing: 'easeInOutCirc' 
                })
            }, 800);
            setTimeout( function() { velocity(button, {
                    'width': '10vh',
                    'height': '10vh',
                    'left': '80vw',
                    'top': '25vh'
                }, { 
                    duration: 650,
                    queue: false,
                    easing: 'easeInOutCubic' 
                })
            }, 800);
            setTimeout( function() { velocity(button, {
                    'border-radius': '50%'
                }, { 
                    duration: 450,
                    queue: false,
                    easing: 'easeInOutCirc' 
                })
            }, 1000);
        };
    });
}