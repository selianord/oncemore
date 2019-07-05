(function(){
    const rootModuleConfigurations = angular.module("oncemore",["ngRoute"]);
    rootModuleConfigurations.config(function($routeProvider,$locationProvider){
        $locationProvider.hashPrefix("");
    })
}())