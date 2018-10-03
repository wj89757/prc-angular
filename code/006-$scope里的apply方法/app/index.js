/*
* @Author: TimJ
* @Date:   2016-09-28 10:03:31
* @Last Modified by:   TimJ
* @Last Modified time: 2016-09-28 13:37:04
*/

'use strict';

var firstCtl = function($scope){
	$scope.date = new Date();
	setInterval(function(){
		$scope.$apply(function(){
 			$scope.date = new Date();
		})
	},1000);
}