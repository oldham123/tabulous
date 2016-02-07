app.controller('MainController', function ($timeout, $mdSidenav, $mdUtil, $log) {
    // this.openLeftMenu = function() {
    //     $mdSidenav('left').toggle();
    
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
    
});

var createTournamentClass = "";
var loadTournamentClass = "";