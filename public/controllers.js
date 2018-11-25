var app=angular.module('myApp.controllers', []);


app.controller('registerUser', function($scope,ergastAPIservice,$location,$rootScope) {
$rootScope.location = $location.path();  
    $scope.name='';
    $scope.email='';
    $scope.password='';
    
    $scope.register = function () {

        var abc={name:$scope.name,email:$scope.email,password:$scope.password};
        console.log(abc);
        $scope.name='';
    $scope.email='';
    $scope.password='';
    console.log(abc);
       ergastAPIservice.registerUser(abc);
       
      

    }

});
app.controller("postController",function($scope,ergastAPIservice,$routeParams)
{

  $scope.id=$routeParams.id;
   ergastAPIservice.getBlog($scope.id).success(function(res){
      $scope.blog=res;
    })
});
app.controller("loginUser",function($scope,ergastAPIservice,$routeParams,$location,$rootScope)
{
  $rootScope.location = $location.path(); 
  $scope.login=function()
    {

        var abc={email:$scope.email,password:$scope.password};
        console.log("loggin in ka object",abc);
        ergastAPIservice.login(abc).success(function(res){
          console.log(res);
            if(res==true)
            {
              $location.path("/home");
            }
            else
            {
              
              alert(res);
            }
        });

    }
});
app.controller("publishAd",function($scope,ergastAPIservice,$routeParams,$location)
{

    $scope.carvantroller=false;
    $scope.motorbike=true;
    $scope.clothesfootwearaccessorieswatches=true;
    $scope.electroniccomputers=true;   
    $scope.mobilephonestabletsGadgets=true;
    $scope.furniturehomekitchenappliancesotherhouseholditems=true;
    $scope.fridgeACwashingMachine=true;
    $scope.landsplotsshopoffices=true;
    $scope.HousesApparments=true;






  $scope.carsvantrollera=function(){
    console.log("ASd");
    $scope.carvantroller=false;
    $scope.motorbike=true;
    $scope.clothesfootwearaccessorieswatches=true;
    $scope.electroniccomputers=true;   
    $scope.mobilephonestabletsGadgets=true;
    $scope.furniturehomekitchenappliancesotherhouseholditems=true;
    $scope.fridgeACwashingMachine=true;
    $scope.landsplotsshopoffices=true;
     $scope.HousesApparments=true;

}
$scope.motorbikea=function(){
   $scope.carvantroller=true;
    $scope.motorbike=false;
    $scope.clothesfootwearaccessorieswatches=true;
    $scope.electroniccomputers=true;   
    $scope.mobilephonestabletsGadgets=true;
    $scope.furniturehomekitchenappliancesotherhouseholditems=true;
    $scope.fridgeACwashingMachine=true;
    $scope.landsplotsshopoffices=true;
     $scope.HousesApparments=true;

}
$scope.clothesfootwearaccessorieswatchesa=function(){
 $scope.carvantroller=true;
    $scope.motorbike=true;
    $scope.clothesfootwearaccessorieswatches=false;
    $scope.electroniccomputers=true;   
    $scope.mobilephonestabletsGadgets=true;
    $scope.furniturehomekitchenappliancesotherhouseholditems=true;
    $scope.fridgeACwashingMachine=true;
    $scope.landsplotsshopoffices=true;
     $scope.HousesApparments=true;

}
$scope.electroniccomputersas=function(){
  console.log("ab yaha hu");
 $scope.carvantroller=true;
    $scope.motorbike=true;
    $scope.clothesfootwearaccessorieswatches=true;
    $scope.electroniccomputers=false;   
    $scope.mobilephonestabletsGadgets=true;
    $scope.furniturehomekitchenappliancesotherhouseholditems=true;
    $scope.fridgeACwashingMachine=true;
    $scope.landsplotsshopoffices=true;
     $scope.HousesApparments=true;


}

$scope.mobilephonestabletsGadgetsa=function(){
  console.log("me yaha hy");
  $scope.carvantroller=true;
    $scope.motorbike=true;
    $scope.clothesfootwearaccessorieswatches=true;
    $scope.electroniccomputers=true;   
    $scope.mobilephonestabletsGadgets=false;
    $scope.furniturehomekitchenappliancesotherhouseholditems=true;
    $scope.fridgeACwashingMachine=true;
    $scope.landsplotsshopoffices=true;
     $scope.HousesApparments=true;

}
$scope.furniturehomekitchenappliancesotherhouseholditemsa=function(){
 $scope.carvantroller=true;
    $scope.motorbike=true;
    $scope.clothesfootwearaccessorieswatches=true;
    $scope.electroniccomputers=true;   
    $scope.mobilephonestabletsGadgets=true;
    $scope.furniturehomekitchenappliancesotherhouseholditems=false;
    $scope.fridgeACwashingMachine=true;
    $scope.landsplotsshopoffices=true;
     $scope.HousesApparments=true;


}
$scope.fridgeACwashingMachinea=function(){
 $scope.carvantroller=true;
    $scope.motorbike=true;
    $scope.clothesfootwearaccessorieswatches=true;
    $scope.electroniccomputers=true;   
    $scope.mobilephonestabletsGadgets=true;
    $scope.furniturehomekitchenappliancesotherhouseholditems=true;
    $scope.fridgeACwashingMachine=false;
    $scope.landsplotsshopoffices=true;
     $scope.HousesApparments=true;
}
$scope.HousesApparmentsa=function(){
  $scope.carvantroller=true;
    $scope.motorbike=true;
    $scope.clothesfootwearaccessorieswatches=true;
    $scope.electroniccomputers=true;   
    $scope.mobilephonestabletsGadgets=true;
    $scope.furniturehomekitchenappliancesotherhouseholditems=true;
    $scope.fridgeACwashingMachine=true;
    $scope.landsplotsshopoffices=true;
     $scope.HousesApparments=false;

}
$scope.landsplotsshopofficesa=function(){
 $scope.carvantroller=true;
    $scope.motorbike=true;
    $scope.clothesfootwearaccessorieswatches=true;
    $scope.electroniccomputers=true;   
    $scope.mobilephonestabletsGadgets=true;
    $scope.furniturehomekitchenappliancesotherhouseholditems=true;
    $scope.fridgeACwashingMachine=true;
    $scope.landsplotsshopoffices=false;
     $scope.HousesApparments=true;

}
$scope.vehicles=false;
$scope.Fashion=true;
  $scope.electronic=true;
   $scope.Mobile=true;
     $scope.Home=true;
      $scope.Real=true;

$scope.vehiclesa=function(){
$scope.vehicles=false;
$scope.Fashion=true;
  $scope.electronic=true;
   $scope.Mobile=true;
     $scope.Home=true;
      $scope.Real=true;
}
$scope.Fashiona=function(){
$scope.vehicles=true;
$scope.Fashion=false;
  $scope.electronic=true;
   $scope.Mobile=true;
     $scope.Home=true;
      $scope.Real=true;
}
 
$scope.electronica=function(){
  $scope.vehicles=true;
$scope.Fashion=true;
  $scope.electronic=false;
   $scope.Mobile=true;
     $scope.Home=true;
      $scope.Real=true;
}

$scope.Mobilea=function(){
$scope.vehicles=true;
$scope.Fashion=true;
  $scope.electronic=true;
   $scope.Mobile=false;
     $scope.Home=true;
      $scope.Real=true;
}
$scope.Homea=function(){
  $scope.vehicles=true;
$scope.Fashion=true;
  $scope.electronic=true;
   $scope.Mobile=true;
     $scope.Home=false;
      $scope.Real=true;
}

$scope.Reala=function(){
  $scope.vehicles=true;
$scope.Fashion=true;
  $scope.electronic=true;
   $scope.Mobile=true;
     $scope.Home=true;
      $scope.Real=false;
}


});



app.controller("home",function($scope,ergastAPIservice,$routeParams)
{
 
});

app.controller("userHome",function($scope,ergastAPIservice,$routeParams)
{
 
});
app.controller("userController",function($scope,ergastAPIservice,$routeParams)
{
  $scope.blogs=[];
  ergastAPIservice.getBlogs().success(function(res){
      //alert("loaded");
      console.log(res);
      $scope.blogs = res;
    });
});
app.controller("forgetController",function($scope,ergastAPIservice,$routeParams)
{
  $scope.blogs=[];
  ergastAPIservice.getBlogs().success(function(res){
      //alert("loaded");
      console.log(res);
      $scope.blogs = res;
    });
});
