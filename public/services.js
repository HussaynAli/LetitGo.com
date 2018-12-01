angular.module('myApp.services', []).
  factory('ergastAPIservice', function ($http) {

    var ergastAPI = {};

    ergastAPI.registerUser = function (data) {
      var req = {
        method: 'POST',
        url: '/register',
        data: data
      };
      $http(req);

    }
    ergastAPI.login = function (abc) {
      var req = {
        method: 'POST',
        url: '/login',
        data: abc
      };
      return $http(req);
    }
    ergastAPI.getAd = function (id) {
      console.log("yeh id hai!", id);
      return $http({
        method: 'GET',
        url: '/ads/' + id
      });
    }
    
    ergastAPI.saveAd = function (abc) {
      var req = {
        method: 'POST',
        url: '/ad',
        data: abc
      };
      return $http(req);
    }

    ergastAPI.getAds = function () {
      return $http({
        method: 'GET',
        url: '/ads'
      });
    }

    return ergastAPI;
  });