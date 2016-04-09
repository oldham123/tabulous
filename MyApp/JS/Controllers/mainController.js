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
    this.animationComplete = function() {
        create.showCreateElements = true;
    };
    this.message = "Directive to controller, are you receiving me?";
    
    this.escapeForm = function () { if (event.keyCode == 27 && main.formOpen) {
            console.log("I detect an escape!");
            var newButton = $('#full-screen-create');
            velocity(newButton, {
                "margin-left": "-100vw"
            }, {
                duration: 700,
                easing: "easeInOutCubic",
                queue: false
            });
            $timeout( function () { main.formOpen = false; }, 700);
        };
    };
    
    //=====================================================\\
});