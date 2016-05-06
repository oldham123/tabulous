app.directive('fullScreenMorph', fullScreenMorph);

function fullScreenMorph() {
    var directive = {
        restrict: 'A',
        scope: {
            buttonText: '='
        },
        link: createLink
    };

    return directive;
}

function createLink(scope, element, attr, main){
    
    var formOpen = false;
    
    element.on('click', function () {
        
        var oldButton = $('#initial-create-button-text');
        
        velocity(newButton, {
            "opacity": "1"
        }, {
            duration: 300,
            easing: "easeOutExpo",
        });
        velocity(newButton, {
            width: "100vw",
            height: "100vh",
            left: 0,
            top: 0,
            margin: 0
        }, {
            duration: 450,
            easing: "easeInOutCubic",
            queue: false,
            delay: 200,
            complete: function () { formOpen = true;
                                    newButton.css('padding', '0');
                                  }
        });
        velocity($('#create-form-container'), {
            'top': "25vh"
        }, {
            duration: 1000,
            easing: 'swing',
            delay: 650
        });
        velocity($('#full-screen-create'), {
            'height': "25vh"
        }, {
            duration: 1000,
            easing: 'swing',
            delay: 650
        });
    });
}