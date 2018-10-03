/*
 * @Author: TimJ
 * @Date:   2016-09-28 10:03:31
 * @Last Modified by:   TimJ
 * @Last Modified time: 2016-09-30 16:00:43
 */

'use strict';


var myApp = angular.module('myApp', [])

.directive('bookList', function() {
	return {
		restrict: 'EA',
		controller: function($scope) {
			console.log($scope);
			$scope.books = [{
				name: 'php',
			}, {
				name: 'javascript',
			}, {
				name: 'java',
			}];
			this.addBook = function() {
				$scope.$apply(function() {
					$scope.books.push({
						name: 'AngularJS'
					})
				});	
			};
		},
		controllerAs: 'bookListCtl',
		template: '<div><ul><li ng-repeat="book in books">{{book.name}}</li></ul><book-add></book-add></div>',
		replace: true,
	}
})

.directive('bookAdd', function() {
	return {
		restrict: 'EA',
		require: '^bookList',
		template: '<button type="button">添加</button>',
		replace: true,
		link: function(scope, iElement, iAttrs, bookListCtl) {
			iElement.on('click', bookListCtl.addBook);
		}
	}
})

.controller('firstCtl', ['$scope', function($scope) {
	// console.log($scope);
}])