/*
 * @Author: TimJ
 * @Date:   2016-09-28 10:03:31
 * @Last Modified by:   TimJ
 * @Last Modified time: 2016-09-29 13:40:57
 */

'use strict';

angular.module('myApp', [])

.factory('Data',function(){
	// this.$get = function(){}
	return {
		message : '共享的数据'
	};
})

.controller('firstCtl',  function($scope,Data) {
	$scope.data = {
		name : '张三'
	};
	$scope.Data = Data;
})

.controller('secondCtl', function($scope,Data){
	$scope.data = $scope.$$prevSibling.data;
	$scope.Data = Data;
})