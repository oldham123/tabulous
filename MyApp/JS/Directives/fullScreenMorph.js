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
        
        var oldButton = $('#full-screen-button');
        var newButton = $('#full-screen-create');
        
        var newButtonText = $('#create-button-text');
        var oldButtonText = $('#old-create-button-text');
        
        newButton.attr('style', 'position: absolute; z-index: 1000000; background-color: #A1887F; opacity: 0');
        newButton.offset(oldButton.offset());
        
        marginLeft = parseInt(Left(oldButton.css('margin-left'), oldButton.css('margin-left').length - 2));
        marginTop = parseInt(Left(oldButton.css('margin-top'), oldButton.css('margin-top').length - 2));
        
        newButtonText.css('font-size', oldButtonText.css('font-size'));
        newButtonText.css('letter-spacing', oldButtonText.css('letter-spacing'));
        newButton.css('display', oldButton.css('display'));
        newButton.css('font-size', oldButton.css('font-size'));
        newButton.css('letter-spacing', oldButton.css('letter-spacing'));
        
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
            complete: function () { formOpen = true; }
        });
    });
}