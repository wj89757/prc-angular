/*
 * @Author: TimJ
 * @Date:   2016-09-28 10:03:31
 * @Last Modified by:   TimJ
 * @Last Modified time: 2016-09-29 10:24:52
 */

'use strict';

var myApp = angular.module('myApp', [],function($provide){
	// 自定义工厂
	$provide.factory('CustomFactory', function(){
		return [0,1,2,3,4,5];
	});

	// 自定义服务
	// 自定义服务返回的东西必须是对象
	// 不能是数字，字符串等基本类型
	$provide.service('CustomService', function(){
		return ['上海'];
	})
});

myApp.controller('firstCtl', function($scope,CustomFactory,CustomService) {
	$scope.name = '张三';

	console.log(CustomFactory);
	console.log(CustomService);
});

// myApp.service();
// myApp.factory();