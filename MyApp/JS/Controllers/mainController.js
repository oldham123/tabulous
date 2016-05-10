app.controller('MainController', function ($scope, $timeout, $mdSidenav, $mdUtil, $log, $state) {

    window.mainScope = $scope.main;
    
    var main = this;
    
    this.status = "home";
    this.homeTop = 0;
    this.buttonWidth = 0;
    this.timeOut = $timeout;
    
    var createTournamentClass = "";
    var loadTournamentClass = "";
    var homeClass = "";
    
    //========= Control for Create Tournment form =========\\
    
    this.createFormOpen = false;
    this.createFormClosing = false;
    this.createFormClosed = true;
});