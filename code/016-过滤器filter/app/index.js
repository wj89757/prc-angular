/*
 * @Author: TimJ
 * @Date:   2016-09-28 10:03:31
 * @Last Modified by:   TimJ
 * @Last Modified time: 2016-09-29 13:54:14
 */

'use strict';


angular.module('myApp', [])

.factory('Data',function(){
	return {
		message : '共享的数据'
	};
})

.controller('firstCtl',  function($scope,Data) {
	$scope.data = Data;

	$scope.today = new Date;

})