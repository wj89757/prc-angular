/*
 * @Author: TimJ
 * @Date:   2016-09-28 10:03:31
 * @Last Modified by:   TimJ
 * @Last Modified time: 2016-09-30 15:25:42
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
			this.addBook =  function(){
				console.log('test');
			};
			$scope.addBook = function(){

			};
		},
		controllerAs : 'bookListCtl',
		template: '<ul><li ng-repeat="book in books">{{book.name}}</li></ul>',
		replace: true,
		link : function(scope,iElement,iAttrs,bookListCtl){
			console.log(bookListCtl);
			iElement.on('click', bookListCtl.addBook);
			// iElement.on('click', scope.addBook);
		},
	}
})

.controller('firstCtl', ['$scope', function($scope) {
	// console.log($scope);
}])