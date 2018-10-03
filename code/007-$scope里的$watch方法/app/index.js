/*
* @Author: TimJ
* @Date:   2016-09-28 10:03:31
* @Last Modified by:   TimJ
* @Last Modified time: 2016-09-28 14:22:25
*/

'use strict';

var firstCtl = function($scope){
	$scope.name = '张三';
	$scope.data = {
		name : '李四',
		count : 20
	}
	$scope.count = 0;

	// 监听一个model，当一个model每次改变时候，都会改变第二个函数
	$scope.$watch('name', function(newValue, oldValue, scope) {
		$scope.count++;
		if ($scope.count > 30) {
			$scope.name = '已经大于30次了';
		}	
	});

	// 只有为true时，才检查对象里面的值
	$scope.$watch('data',function(){
		
	},true);
}