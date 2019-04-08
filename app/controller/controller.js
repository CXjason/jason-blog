function homeCtrl($scope,$rootScope,$http,$timeout){

	//轮播数据
	$scope.carouselData = [$rootScope.emotionalArticleData[0],$rootScope.emotionalArticleData[1],$rootScope.emotionalArticleData[2],$rootScope.emotionalArticleData[3],$rootScope.emotionalArticleData[4],$rootScope.emotionalArticleData[5]];
	//热点数据
	$scope.hotData1 = [
		$rootScope.emotionalArticleData[0],
		$rootScope.emotionalArticleData[1],
		$rootScope.emotionalArticleData[2],
		$rootScope.emotionalArticleData[3],
		$rootScope.emotionalArticleData[4]
	];
	$scope.hotData2 = [
		$rootScope.storyArticleData[0],
		$rootScope.storyArticleData[1],
		$rootScope.storyArticleData[2],
		$rootScope.storyArticleData[3],
		$rootScope.storyArticleData[4]
	];
	$scope.listData = [
		$rootScope.emotionalArticleData[0],
		$rootScope.emotionalArticleData[1],
		$rootScope.emotionalArticleData[2],
		$rootScope.emotionalArticleData[3],
		$rootScope.emotionalArticleData[4],
		$rootScope.emotionalArticleData[5],
		$rootScope.storyArticleData[0],
		$rootScope.storyArticleData[1],
		$rootScope.storyArticleData[2],
		$rootScope.storyArticleData[3],
		$rootScope.storyArticleData[4],
		$rootScope.storyArticleData[5]
	]


	//热点移入显示介绍内容
	$scope.addAct = function(ev){
		angular.element(ev.currentTarget).find(".introduce").addClass("act");
	};

	//热点移出隐藏介绍内容
	$scope.removeAct = function(ev){
		angular.element(ev.currentTarget).find(".introduce").removeClass("act");
	};


	//将时间戳解析
	$scope.turn = function(stamp){
		var stampNum = parseInt(stamp);
		var dateFormat = new Date(stampNum);
		return dateFormat;
	}


	$timeout.cancel($scope.timer);
	$scope.timer = $timeout(()=>{
		
		$scope.carousel = new Swiper ('.carousel', {
		   // direction: 'vertical',
		    loop: true,
		    autoplay:2000,
		    speed:800,
		    // 如果需要分页器
		    pagination: '.swiper-pagination',
		    
		    // 如果需要前进后退按钮
		    nextButton: '.swiper-button-next',
		    prevButton: '.swiper-button-prev',
		 });
		$timeout.cancel($scope.timer);
	},1000)

	


};


function emotionalArticle($scope,$rootScope,$timeout){//情感文章
	//轮播数据
	$scope.carouselData = [$rootScope.emotionalArticleData[0],$rootScope.emotionalArticleData[1],$rootScope.emotionalArticleData[2],$rootScope.emotionalArticleData[3],$rootScope.emotionalArticleData[4],$rootScope.emotionalArticleData[5]];
	//热点数据
	$scope.hotData1 = [
		$rootScope.emotionalArticleData[0],
		$rootScope.emotionalArticleData[1],
		$rootScope.emotionalArticleData[2],
		$rootScope.emotionalArticleData[3],
		$rootScope.emotionalArticleData[4]
	];
	$scope.hotData2 = [
		$rootScope.storyArticleData[0],
		$rootScope.storyArticleData[1],
		$rootScope.storyArticleData[2],
		$rootScope.storyArticleData[3],
		$rootScope.storyArticleData[4]
	];
	$scope.listData = $rootScope.emotionalArticleData;


	//热点移入显示介绍内容
	$scope.addAct = function(ev){
		angular.element(ev.currentTarget).find(".introduce").addClass("act");
	};

	//热点移出隐藏介绍内容
	$scope.removeAct = function(ev){
		angular.element(ev.currentTarget).find(".introduce").removeClass("act");
	};


	//将时间戳解析
	$scope.turn = function(stamp){
		var stampNum = parseInt(stamp);
		var dateFormat = new Date(stampNum);
		return dateFormat;
	}


	$timeout.cancel($scope.timer);
	$scope.timer = $timeout(()=>{
		
		$scope.carousel = new Swiper ('.carousel', {
		   // direction: 'vertical',
		    loop: true,
		    autoplay:2000,
		    speed:800,
		    // 如果需要分页器
		    pagination: '.swiper-pagination',
		    
		    // 如果需要前进后退按钮
		    nextButton: '.swiper-button-next',
		    prevButton: '.swiper-button-prev',
		 });
		$timeout.cancel($scope.timer);
	},1000);


	  
	$("#Pagination").pagination("15");
	
};

function storyArticle($scope,$rootScope,$timeout){
	//轮播数据
	$scope.carouselData = [$rootScope.emotionalArticleData[0],$rootScope.emotionalArticleData[1],$rootScope.emotionalArticleData[2],$rootScope.emotionalArticleData[3],$rootScope.emotionalArticleData[4],$rootScope.emotionalArticleData[5]];
	//热点数据
	$scope.hotData1 = [
		$rootScope.emotionalArticleData[0],
		$rootScope.emotionalArticleData[1],
		$rootScope.emotionalArticleData[2],
		$rootScope.emotionalArticleData[3],
		$rootScope.emotionalArticleData[4]
	];
	$scope.hotData2 = [
		$rootScope.storyArticleData[0],
		$rootScope.storyArticleData[1],
		$rootScope.storyArticleData[2],
		$rootScope.storyArticleData[3],
		$rootScope.storyArticleData[4]
	];
	$scope.listData = $rootScope.storyArticleData;


	//热点移入显示介绍内容
	$scope.addAct = function(ev){
		angular.element(ev.currentTarget).find(".introduce").addClass("act");
	};

	//热点移出隐藏介绍内容
	$scope.removeAct = function(ev){
		angular.element(ev.currentTarget).find(".introduce").removeClass("act");
	};


	//将时间戳解析
	$scope.turn = function(stamp){
		var stampNum = parseInt(stamp);
		var dateFormat = new Date(stampNum);
		return dateFormat;
	}


	$timeout.cancel($scope.timer);
	$scope.timer = $timeout(()=>{
		
		$scope.carousel = new Swiper ('.carousel', {
		   // direction: 'vertical',
		    loop: true,
		    autoplay:2000,
		    speed:800,
		    // 如果需要分页器
		    pagination: '.swiper-pagination',
		    
		    // 如果需要前进后退按钮
		    nextButton: '.swiper-button-next',
		    prevButton: '.swiper-button-prev',
		 });
		$timeout.cancel($scope.timer);
	},1000);


	  
	$("#Pagination").pagination("15");
};

function articleReading($scope,$rootScope,$stateParams){//文章阅读
	$scope.mold = $stateParams.mold;//类型
	$scope.id = $stateParams.id;//文章id
	$scope.modelData = [];//该类型下的所有数据
	$scope.data = {};//类型下与id值匹配的该条数据

	//找出属于哪个类型的
	for(var attr in $rootScope.modelJson){
		if($scope.mold == attr){
			$scope.modelData = $rootScope.modelJson[attr];
		}
	};

	angular.forEach($scope.modelData,function(item,i){
		if(item.id == $scope.id){
			$scope.data = item;
		}
	});

	//将时间戳解析
	$scope.turn = function(stamp){
		var stampNum = parseInt(stamp);
		var dateFormat = new Date(stampNum);
		return dateFormat;
	}

}