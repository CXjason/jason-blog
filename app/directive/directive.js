
//使用该指令的元素上随机分配背景色
blog.directive("randomBg",function(){
	var bgColors = ["#00FFFF","#7FFFD4","#7FFF00","#FF7F50","#DC143C","#8B008B","#9932CC","#FF1493","#FFD700","#3CB371","#9ACD32","#EE82EE"]
	return{
		restrict:'A',
		link:function(scope,element,attrs){
			 var index = Math.floor(Math.random() * bgColors.length);
			 angular.element(element).css("background-color",bgColors[index]);
		}
	}
})