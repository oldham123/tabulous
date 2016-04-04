app.directive('fullScreenMorph', fullScreenMorph);

function fullScreenMorph() {
    var directive = {
        restrict: 'A',
        templateUrl: '../Views/create.html',
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
    console.log("Controller ran");
}

function createLink(scope, element, attr, create){
    element.on('click', function () {
                  var oldButton = $('#full-screen-button');
                  $('#load-wrapper').load('../Views/create.html');
                  var newButton = $('#load-wrapper');
                  newButton.attr('style', 'position: absolute; z-index: 1000000');
                  console.log(newButton.offset().left);
                  console.log(newButton.offset().top);
                  newButton.offset(oldButton.offset());
                  console.log(newButton.offset().left);
                  console.log(newButton.offset().top);
                  var buttonText = $('#full-screen > span');
                  var marginLeft = $('#full-screen').css('margin-left');
                  marginLeft = parseInt(Left(marginLeft, marginLeft.length - 2));
                  var marginTop = $('#full-screen').css('margin-top');
                  marginTop = parseInt(Left(marginTop, marginTop.length - 2));
                //   velocity(document.getElementById("create-button-text"), {
                //       "opacity": "0"
                //   }, {
                //       duration: 500,
                //       easing: "easeOutExpo"
                //   });
                //   velocity(document.getElementById("full-screen"), {
                //       "width": "100vw"
                //   }, {
                //       duration: 1500,
                //       easing: "easeInExpo",
                //       queue: false,
                //       delay: 300
                //   });
                //   velocity(document.getElementById("full-screen"), {
                //       "height": "100vh"
                //   }, {
                //       duration: 1500,
                //       easing: "easeInExpo",
                //       queue: false,
                //       delay: 300
                //   });
                //   velocity(document.getElementById("full-screen"), {
                //       "margin-left": marginLeft - $('#full-screen').offset().left
                //   }, {
                //       duration: 1500,
                //       easing: "easeInExpo",
                //       queue: false,
                //       delay: 300
                //   });
                //   velocity(document.getElementById("full-screen"), {
                //       "margin-top": marginTop - $('#full-screen').offset().top
                //   }, {
                //       duration: 1500,
                //       easing: "easeInExpo",
                //       queue: false,
                //       delay: 300
                //   });
              });
}