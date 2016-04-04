app.controller('homeController', function ($timeout, $mdSidenav, $mdUtil, $log, $mdDialog) {
    
    this.overlaySettings = {
        closeEl: '#close',
        overlay: {
            templateUrl: '../../Views/createTournament.html',
            scroll: false
        }
    }
    
});