/*
 * @Author: TimJ
 * @Date:   2016-09-28 10:03:31
 * @Last Modified by:   TimJ
 * @Last Modified time: 2016-09-29 21:03:45
 */

'use strict';


var myApp = angular.module('myApp', [], function() {

})

.factory('customService', ['$window', function(a){
	console.log(a);
}])

// 隐式依赖注入
.controller('firstCtl', function($scope,customService) {

})
// 显式的依赖注入
.controller('secondCtl', ['$scope', '$filter', function(a, b) {
	// a就是scope对象
	console.log(a);
	console.log(b('json')([1, 2, 3, 4, 5]));
}]);


function otherCtl(a){
	console.log(a);
}

otherCtl.$inject = ['$scope'];