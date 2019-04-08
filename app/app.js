var blog = angular.module("blog",["ui.router"]);
blog.run(function($rootScope){
	$rootScope.emotionalArticleData = emotionalArticleData;
	$rootScope.storyArticleData = storyArticleData;
	$rootScope.modelJson = {"情感文章":$rootScope.emotionalArticleData,"故事文章":$rootScope.storyArticleData};

})
blog.config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){

  	$urlRouterProvider.otherwise('/');  
 

	$stateProvider
	.state('home',{
		url:'/',
		templateUrl:'../templ/home.html',
		controller:homeCtrl
	})
	.state('emotionalArticle',{//情感文章
		url:'/emotionalArticle',
		templateUrl:'../templ/emotionalArticle.html',
		controller:emotionalArticle
	})
	.state('storyArticle',{//故事文章
		url:'/storyArticle',
		templateUrl:'../templ/storyArticle.html',
		controller:storyArticle
	})
	.state('bookRecommendation',{//书籍推荐
		url:'/bookRecommendation',
		template:'<div>书籍推荐(正在升级中，敬请期待)</div>',
		controller:function($scope){

		}
	})
	.state("articleReading",{//文章阅读
		url:'/articleReading/:mold/:id',
		templateUrl:'../templ/articleReading.html',
		controller:articleReading
	})

	

	
}])
