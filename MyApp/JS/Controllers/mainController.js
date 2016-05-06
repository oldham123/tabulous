app.controller('MainController', function ($scope, $timeout, $mdSidenav, $mdUtil, $log, $state) {

    window.mainScope = $scope.main;
    
    var main = this;
    
    this.status = "home";
    this.homeTop = 0;
    
    var createTournamentClass = "";
    var loadTournamentClass = "";
    var homeClass = "";
    
    //========= Control for Create Tournment form =========\\
    
    this.formOpening = function () {
        $timeout( function() { main.formOpen = true; }, 650);
    };
    
    this.formOpen = false;
    this.formClosing = false;
    this.animationComplete = function() {
        create.showCreateElements = true;
    };
    this.message = "Directive to controller, are you receiving me?";
    
    // this.escapeForm = function () { if (event.keyCode == 27 && main.formOpen) {
    //         console.log("I detect an escape!");
    //         main.formClosing = true;
    //         var newButton = $('#full-screen-create');
    //         //$('#initial-create-button').css('display', 'none');
    //         main.formOpen = false;
    //         velocity($('#create-form-container'), {
    //             'top': '100vh'
    //         }, {
    //             duration: 600,
    //             queue: false,
    //             easing: 'swing'
    //         });
    //         $timeout( function() { main.formOpen = false;
    //                                main.formClosing = false; }, 600);
    //         setTimeout( function () {newButton.animate({
    //                 'border-radius': '50%',
    //                 'width': '10vh',
    //                 'height': '10vh'
    //             }, 
    //                 { duration: 500,
    //                   queue: false,
    //                   easing: 'easeOutQuart' 
    //             });
    //         }, 600);
    //         setTimeout( function () {newButton.animate({
    //                 'left': '90vw'
    //             }, 
    //                 { duration: 600,
    //                   queue: false,
    //                   easing: 'easeInOutSine'
    //             });
    //         }, 600);
    //         setTimeout( function () {newButton.animate({
    //                 'top': '55vh'
    //             }, 
    //                 { duration: 300,
    //                   queue: false,
    //                   easing: 'easeOutSine'
    //             });
    //         }, 600);
    //         setTimeout( function () {newButton.animate({
    //                 'top': '25vh'
    //             }, 
    //                 { duration: 300,
    //                   queue: false,
    //                   easing: 'easeInSine'
    //             });
    //         }, 900);
    //     };
    // };
    
    //=====================================================\\
});