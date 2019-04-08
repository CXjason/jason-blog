

var blog = angular.module("phoneblog",['ui.router']);

blog.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/');


	$stateProvider
	.state('home',{
		url:'/',
		templateUrl:'/phone/templ/home.html',
		controller:homeCtrl
	})
	.state('emotionClassify',{
		url:'/emotionClassify',
		templateUrl:'/phone/templ/emotionClassify.html',
		controller:emotionClassifyCtrl
	})
	.state('articleReading',{
		url:'/articleReading/:id',
		templateUrl:'/phone/templ/articleReading.html',
		controller:articleReadingCtrl
	})



}])