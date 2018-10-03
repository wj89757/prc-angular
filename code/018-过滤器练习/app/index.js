/*
 * @Author: TimJ
 * @Date:   2016-09-28 10:03:31
 * @Last Modified by:   TimJ
 * @Last Modified time: 2016-09-29 15:21:53
 */

'use strict';


angular.module('product', [])

.service('productData', function(){
	return [
		{
			id : 1,
			name : 'iphone',
			price : 5400,
		},
		{
			id : 2,
			name : 'ipad',
			price : 8000,
		},
		{
			id : 3,
			name : 'itouch',
			price : 2000,
		},
		{
			id : 4,
			name : 'ipod',
			price : 15000,
		},
	];
})

.controller('productCtl', function($scope,productData){
	$scope.productData = productData;

	$scope.orderType = 'id';
	$scope.order = '-';

	$scope.changeOrder = function(type){
		$scope.orderType = type;
		if($scope.order === ''){
			$scope.order = '-';
		}else{
			$scope.order = '';
		}
	}
})