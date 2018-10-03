/*
 * @Author: TimJ
 * @Date:   2016-09-28 10:03:31
 * @Last Modified by:   TimJ
 * @Last Modified time: 2016-09-30 16:41:30
 */

'use strict';


var myApp = angular.module('myApp', [])

.directive('bookList', function() {
	return {
		restrict: 'EA',
		controller: function($scope) {
			// &books
			// $scope.books = $scope.a();
			
			// =books
			// $scope.books = $scope.b();
			
			// @books
			console.log($scope.c);
		},
		scope : {
			// 将父元素books封装成一个a函数			
			// a:'&books',
			// 双向绑定 b = parenetBooks属性对应的父作用域的表达式
			// b:'=parentBooks',
			// 只能读取父作用域的属性绑定
			// 使用简单数据类型的方法
			c:'@parentTitle',
		},
		controllerAs: 'bookListCtl',
		template: '<div><ul><li ng-repeat="book in books">{{book.name}}</li></ul></div>',
		replace: true,
	}
})


.controller('firstCtl', ['$scope', function($scope) {
	// console.log($scope);
	$scope.books = [{
		name: 'php',
	}, {
		name: 'javascript',
	}, {
		name: 'java',
	}];

	$scope.title = '张三'
}])