(function() {
    'use strict';

    angular
        .module('appCine')
        .config(Config);


    function Config($routeProvider, $locationProvider){
    	//App Routes
        $routeProvider
			.when('/',{
              templateUrl : 'app/home/home.html',
              controller  : 'homeController',
              controllerAs: 'home'				
			})
            .when('/about', 
            {
              templateUrl : 'app/about/about.html',
              controller  : 'aboutController',
              controllerAs: 'about'
            })
            .when('/portafolio', 
            {
              templateUrl : 'app/portafolio/portafolio.html',
              controller  : 'portafolioController',
              controllerAs: 'portafolio'
            })
            .when('/contact', 
            {
              templateUrl : 'app/contacto/contacto.html',
              controller  : 'contactoController',
              controllerAs: 'contacto'
            })
            .otherwise({redirectTo:'/'});
				$locationProvider.html5Mode(true);
		}
})();
