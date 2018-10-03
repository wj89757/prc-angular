/*
 * @Author: TimJ
 * @Date:   2016-09-28 10:03:31
 * @Last Modified by:   TimJ
 * @Last Modified time: 2016-09-30 14:02:33
 */

'use strict';

var myApp = angular.module('myApp', [])

.directive('customTags', function() {
	return {
		restrict: 'EA',
		templateUrl: 'tmp/other.html',
		replace: true,
	};
})

.directive('customTags2', function() {
	return {
		restrict: 'EA',
		templateUrl: 'customTags2',
		replace: true,
	};
})

.controller('firstCtl', ['$scope', function($scope){
	$scope.name = '张三'; 
}])