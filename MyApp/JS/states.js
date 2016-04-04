app.config(function($stateProvider) {
    
    $stateProvider.state('home', {
        templateUrl: './../Views/home.html',
        controller: 'homeController as home'
    })
});

app.run(['$state', function ($state, $rootScope) {
    $state.transitionTo('home');
}])