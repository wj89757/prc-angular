/*
 * @Author: TimJ
 * @Date:   2016-09-28 10:03:31
 * @Last Modified by:   TimJ
 * @Last Modified time: 2016-09-29 10:13:57
 */

'use strict';

var myApp = angular.module('myApp', [],function($provide){
	// 自定义服务,不推荐使用
	$provide.provider('CustomService', function(){
		this.$get = function(){
			return {
				message : 'CustomService Message'
			}
		}
	});
});

myApp.controller('firstCtl', function($scope,CustomService) {
	$scope.name = '张三';

	console.log(CustomService);
});