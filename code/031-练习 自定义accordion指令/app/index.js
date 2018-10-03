/*
* @Author: TimJ
* @Date:   2016-09-30 08:46:42
* @Last Modified by:   TimJ
* @Last Modified time: 2016-10-02 20:07:34
*/

'use strict';

var myApp = angular.module('myApp', [])
// 数据
.factory('data', function(){
	return [
		{
			title : 'no1',
			content : 'no1-content',
		},
		{
			title : 'no2',
			content : 'no2-content',
		},
		{
			title : 'no3',
			content : 'no3-content',
		}
	]
})
// 控制器
.controller('firstCtl', ['$scope','data',function($scope,data){
	$scope.data = data;
}])

.directive('kittencupGroup',function(){
	return {
		restrict : 'E',
		replace : true,
		template : '<div class="panel-group" ng-transclude></div>',
		transclude : true,
		controllerAs : 'kittencupGroupCtl',
		controller : function(){
			this.groups = [];

			this.closeOtherCollapse = function(nowScope){
				angular.forEach(this.groups, function(scope){
					if(scope !== nowScope){
						scope.isOpen = false;
					}
				});
			}
		},
	}
})

.directive('kittencupCollapse',function(){
	return {
		restrict : 'E',
		replace : true,
		require:'^kittencupGroup',
		templateUrl : 'app/tmp/kittencupCollapse.html',
		scope : {
			heading : '@',
		},
		transclude : true,
		link : function(scope,iElement,iAttrs,kittencupGroupCtl){
			scope.isOpen = false;

			scope.changeOpen = function(){
				scope.isOpen = !scope.isOpen; 

				kittencupGroupCtl.closeOtherCollapse(scope);				
			}

			kittencupGroupCtl.groups.push(scope); 
		},
	}
})



