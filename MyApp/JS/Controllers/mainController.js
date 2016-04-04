app.controller('MainController', function ($timeout, $mdSidenav, $mdUtil, $log, $state) {

    this.buildToggler = function(navID) {
      var debounceFn =  $mdUtil.debounce(function(){
            $mdSidenav(navID)
              .toggle()
              .then(function () {
                $log.debug("toggle " + navID + " is done");
              });
          },200);

      return debounceFn;
    }
    
    this.openRightMenu = this.buildToggler('right');
    
    this.status = "home";
    this.homeTop = 0;
    
    var createTournamentClass = "";
    var loadTournamentClass = "";
    var homeClass = "";
});