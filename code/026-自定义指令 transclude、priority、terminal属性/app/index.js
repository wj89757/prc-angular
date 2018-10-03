/*
 * @Author: TimJ
 * @Date:   2016-09-28 10:03:31
 * @Last Modified by:   TimJ
 * @Last Modified time: 2016-09-30 14:16:05
 */

'use strict';

var myApp = angular.module('myApp', [])

.directive('customTags', function() {
	return {
		restrict: 'EA',
		template : '<div>adsd <span ng-transclude></span></div>',
		replace: true,
		transclude: true, 
	};
})

.directive('customTags2', function() {
	return {
		restrict: 'EA',
		template : '<div>2</div>',
		replace: true,
		priority : -1,
	};
})

.directive('customTags3', function() {
	return {
		restrict: 'EA',
		template : '<div>3</div>',
		replace: true,
	};
})


.controller('firstCtl', ['$scope', function($scope){
	$scope.name = '张三'; 
}])