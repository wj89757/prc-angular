/*
 * @Author: TimJ
 * @Date:   2016-09-28 10:03:31
 * @Last Modified by:   TimJ
 * @Last Modified time: 2016-09-29 20:27:01
 */

'use strict';


angular.module('myApp', [], function($filterProvider, $provide, $controllerProvider) {
	$provide.service('Data', function() {
		return [{
			name: '张三',
			age: 20,
			city: '上海',
		}, {
			name: '李四',
			age: 30,
			city: '北京',
		}];
	});

	$filterProvider.register('filterAge', function() {
		return function(obj) {
			var newObj = [];
			angular.forEach(obj, function(o) {
				if (o.age > 20) {
					newObj.push(o);
				}
			});
			return newObj;
		}
	});

	$controllerProvider.register('firstCtl', function($scope, Data) {
		$scope.data = Data;
	});
})

.filter('filterCity', function() {
	return function(obj) {
		var newObj = [];
		angular.forEach(obj, function(o) {
			if (o.city === '上海') {
				newObj.push(o);
			}
		});
		return newObj;
	}
})