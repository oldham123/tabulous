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
}

function createLink(scope, element, attr, create){
    element.on('click', function () {
                  var oldButton = $('#full-screen-button');
                  $('#load-wrapper').load('../Views/create.html', function(scope, element, attr, create) {
                      var newButton = $('#full-screen-create');
                      var newButtonText = $('#create-button-text');
                      var oldbutton = $('#full-screen-button');
                      var oldButtonText = $('#old-create-button-text');
                      newButton.attr('style', 'position: absolute; z-index: 1000000');
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
                        velocity(newButtonText, {
                            "opacity": "0"
                        }, {
                            duration: 300,
                            easing: "easeOutExpo"
                        });
                        velocity(newButton, {
                            "width": "100vw"
                        }, {
                            duration: 500,
                            easing: "easeInOutExpo",
                            queue: false,
                            delay: 150
                        });
                        velocity(newButton, {
                            "height": "100vh"
                        }, {
                            duration: 500,
                            easing: "easeInOutExpo",
                            queue: false,
                            delay: 150
                        });
                        velocity($('#load-wrapper'), {
                            "left": 0
                        }, {
                            duration: 500,
                            easing: "easeInOutExpo",
                            queue: false,
                            delay: 150
                        });
                        velocity($('#load-wrapper'), {
                            "top": 0
                        }, {
                            duration: 500,
                            easing: "easeInOutExpo",
                            queue: false,
                            delay: 150
                        });
                        velocity(newButton, {
                            "left": 0
                        }, {
                            duration: 500,
                            easing: "easeInOutExpo",
                            queue: false,
                            delay: 150
                        });
                        velocity(newButton, {
                            "top": 0
                        }, {
                            duration: 500,
                            easing: "easeInOutExpo",
                            queue: false,
                            delay: 150
                        });
                        velocity(newButton, {
                            "margin": 0
                        }, {
                            duration: 500,
                            easing: "easeInOutExpo",
                            queue: false,
                            delay: 150
                        });
                  });
              });
}