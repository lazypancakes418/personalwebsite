angular.module('app', ['app.home', 'ui.router'])
  .config(($stateProvider, $urlRouterProvider, $locationProvider) => {
    $locationProvider.hashPrefix('');
    $urlRouterProvider.otherwise('/');
    let states = [
      {
        name: 'home',
        url: '/',
        templateUrl: '/components/home/home.html',
        controller: 'HomeCTRL'
      }
    ]
    states.forEach((state) => {
      $stateProvider.state(state)
    })

  })