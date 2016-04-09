app.directive('fullScreenMorph', fullScreenMorph);

function fullScreenMorph() {
    var directive = {
        restrict: 'A',
        scope: {
            buttonText: '='
        },
        controller: createController,
        controllerAs: 'create',
        bindToController: true,
        link: createLink
    };

    return directive;
}

function createController() {
    var create = this;
    this.open = false;
}

function createLink(scope, element, attr, create){
    element.on('click', function () {
        create.open = true;
        var oldButton = $('#full-screen-button');
        $('#load-wrapper').load('../Views/create.html', function(scope, element, attr, create) {
            var newButton = $('#full-screen-create');
            var newButtonText = $('#create-button-text');
            var oldbutton = $('#full-screen-button');
            var oldButtonText = $('#old-create-button-text');
            newButton.attr('style', 'position: absolute; z-index: 1000000; background-color: #A1887F; opacity: 0');
            newButton.offset(oldButton.offset());
            var marginLeft = oldButton.css('margin-left');
            marginLeft = parseInt(Left(marginLeft, marginLeft.length - 2));
            var marginTop = oldButton.css('margin-top');
            marginTop = parseInt(Left(marginTop, marginTop.length - 2));
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
                  duration: 300,
                  easing: "easeInOutCubic",
                  queue: false,
                  delay: 200
              });
        });
    });
    
    $('body').on('keyup', function (event) {
        console.log(event.keyCode);
        if (event.keyCode == 27 && create.open == true) {
            var newButton = $('#full-screen-create');
            velocity(newButton, {
                "margin-left": "-100vw"
            }, {
                duration: 700,
                easing: "easeInOutCubic",
                queue: false
            });
        }
    });
    
}