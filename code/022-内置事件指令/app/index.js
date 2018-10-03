/*
 * @Author: TimJ
 * @Date:   2016-09-28 10:03:31
 * @Last Modified by:   TimJ
 * @Last Modified time: 2016-09-30 10:18:23
 */

'use strict';


var myApp = angular.module('myApp', [])

.controller('firstCtl', ['$scope', function(a){
	a.status = false;

	a.changeStatus = function(event){
		// 通过element转换成jquery对象
		angular.element(event.target).html('切换状态为：' + a.status);
		// console.log(event.target);
		a.status = !a.status;
		
	}
}]);