/*
 * @Author: TimJ
 * @Date:   2016-09-28 10:03:31
 * @Last Modified by:   TimJ
 * @Last Modified time: 2016-09-30 10:37:01
 */

'use strict';


var myApp = angular.module('myApp', [])

.controller('firstCtl', ['$scope', function($scope){
	$scope.defaultStyle = {
		color : 'red',
		'margin-top' : '50px',
	};
	$scope.status = false;

	$scope.changeStatus = function(event){
		// 通过element转换成jquery对象
		angular.element(event.target).html('切换状态为：' + $scope.status);
		// console.log(event.target);
		$scope.status = !$scope.status;
	}

	$scope.src = 'http://ww2.sinaimg.cn/mw690/6764cadegw1f8beskt4mvj20bh0futad.jpg';
}])