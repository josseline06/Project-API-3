/**
 * Main AngularJS Web Application
 */
var app = angular.module('tutorialWebApp', ['ngRoute','duScroll']);

app.controller('MyCtrl', function($scope, $document){
    $scope.toTheTop = function() {
      $document.scrollTopAnimated(0, 5000).then(function() {
        console && console.log('You just scrolled to the top!');
      });
    }
    var section3 = angular.element(document.getElementById('section-3'));
    $scope.toSection3 = function() {
      $document.scrollToElementAnimated(section3);
    }
  }
).value('duScrollOffset', 30);
/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/",{
      templateUrl: "app/partials/home.html",
      controller: "PageCtrl"
    })
    // Pages
    .when("/about",{
      templateUrl: "app/partials/about.html",
      controller: "PageCtrl"
    })
    .when("/faq", {
      templateUrl: "app/partials/faq.html",
      controller: "PageCtrl"
    })
    .when("/pricing", {
      templateUrl: "app/partials/pricing.html",
      controller: "PageCtrl"
    })
    .when("/services", {
      templateUrl: "app/partials/services.html",
      controller: "PageCtrl"
    })
    .when("/contact", {
      templateUrl: "app/partials/contact.html",
      controller: "PageCtrl"
    })
    // Blog
    .when("/blog", {
      templateUrl: "app/partials/blog.html",
      controller: "BlogCtrl"
    })
    .when("/blog/post", {
      templateUrl: "app/partials/blog_item.html",
      controller: "BlogCtrl"
    })
    // else 404
    .otherwise("/404", {
      templateUrl: "app/partials/404.html",
      controller: "PageCtrl"
    });
}]);

/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
  console.log("Blog Controller reporting for duty.");
});

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function($scope, $location, $anchorScroll) {
  $scope.scrollTo = function(id) {
    $location.hash(id);
    console.log($location.hash());
    $anchorScroll();
  };
  console.log("Page Controller reporting for duty.");

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});

app.run(function($rootScope, $location, $anchorScroll, $routeParams) {
  //when the route is changed scroll to the proper element.
  $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
    $location.hash($routeParams.scrollTo);
    $anchorScroll();  
  });
});