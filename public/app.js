'use strict';


angular.module('myApp', [
	'myApp.controllers', 'myApp.services', 'ngRoute'
])
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.
			when("/login", { templateUrl: "partials/login.html", controller: "loginUser" }).
			when("/userhome", { templateUrl: "partials/userhome.html", controller: "userHome" }).
			when("/register", { templateUrl: "partials/register.html", controller: "registerUser" }).
			when("/products", { templateUrl: "partials/products.html", controller: "productController" }).
			when("/logout", { templateUrl: "partials/logout.html", controller: "LogoutController" }).
			when("/publishAd", { templateUrl: "partials/Publishad.html", controller: "publishAd", cache: false }).
			when("/product/:id", { templateUrl: "partials/product_details.html", controller: "postController" }).
			when("/home", { templateUrl: "partials/home.html", controller: "home" }).
			when("/userproducts", { templateUrl: "partials/userproducts.html", controller: "userController" }).
			when("/forgetpass", { templateUrl: "partials/forgetpass.html", controller: "forgetController" }).

			otherwise({ redirectTo: '/home' });
	}]);


