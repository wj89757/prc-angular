/*
 * @Author: TimJ
 * @Date:   2016-09-28 10:03:31
 * @Last Modified by:   TimJ
 * @Last Modified time: 2016-09-29 14:26:28
 */

'use strict';


angular.module('myApp', [])

.factory('Data',function(){
	return {
		message : 'Hello World',
		city : [
			{
				name : '上海',
				py : 'shanghai'
			},
			{
				name : '北京',
				py : 'beijing'
			},
			{
				name : '四川',
				py : 'sichuan'
			},
		]
	};
})

.controller('firstCtl',  function($scope,Data,$filter) {
	$scope.data = Data;
	$scope.today = new Date;

	// 过滤器
	var num = $filter('number')(3000);
	console.log(num);

	var jsonString = $filter('json')($scope.data);
	console.log(jsonString);
	console.log($scope.data);

	// 自定义方法
	$scope.checkName = function(obj){
			
		if(obj.py.indexOf('h')===-1){
			return false;
		}
		return true;
	}

})