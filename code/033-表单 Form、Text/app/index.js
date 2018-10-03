/*
 * @Author: TimJ
 * @Date:   2016-09-28 10:03:31
 * @Last Modified by:   TimJ
 * @Last Modified time: 2016-10-03 16:13:55
 */

'use strict';


var myApp = angular.module('myApp', [])

.filter('cityFilter', function() {
	return function(data, parent) {
		// console.log(data);
		var filterData = [];
		angular.forEach(data, function(obj) {
			if (obj.parent === parent) {
				filterData.push(obj);
			}
		});
		return filterData;
	}
})

.directive('even', function() {
	return {
		require: 'ngModel',
		link: function(scope, ele, attrs, ngModelController) {
			ngModelController.$parsers.push(function(viewValue) {
				// console.log(viewValue);
				if (viewValue % 2 === 0) {
					ngModelController.$setValidity('even', true);
				} else {
					ngModelController.$setValidity('even', false);
				}
				return viewValue;
			});

			ngModelController.$formatters.push(function(modelValue) {
				return modelValue + 'kittencup'
			});
		},
	};
})

.directive('customTextArea', function() {
	return {
		restrict : 'EA',
		template : '<div contenteditable="true"></div>',
		replace : true,
		require: 'ngModel',
		link: function(scope, ele, attrs, ngModelController) {
			// view->model
			ele.on('keyup',function(){
				scope.$apply(function(){
					ngModelController.$setViewValue(ele.html());
				});
				// console.log(ngModelController);
			});

			ngModelController.$render = function(){
				ele.html(ngModelController.$viewValue);
			}
		},
	};
})


.controller('firstCtl', ['$scope', function($scope) {
	var that = this;
	$scope.hobbies = [{
		id: 1,
		name: '玩游戏',
	}, {
		id: 2,
		name: '写代码',
	}, {
		id: 3,
		name: '睡觉',
	}, {
		id: 4,
		name: '打台球',
	}, ];

	$scope.cities = [{
		name: '上海',
		parent: 0,
		id: 1
	}, {
		name: '上海市',
		parent: 1,
		id: 2
	}, {
		name: '徐汇区',
		parent: 2,
		id: 8
	}, {
		name: '长宁区',
		parent: 2,
		id: 3
	}, {
		name: '北京',
		parent: 0,
		id: 4
	}, {
		name: '北京市',
		parent: 4,
		id: 5
	}, {
		name: '东城区',
		parent: 5,
		id: 6
	}, {
		name: '丰台区',
		parent: 5,
		id: 7
	}, {
		name: '浙江',
		parent: 0,
		id: 9
	}, {
		name: '杭州',
		parent: 9,
		id: 100
	}, {
		name: '宁波',
		parent: 9,
		id: 11
	}, {
		name: '西湖区',
		parent: 100,
		id: 12
	}, {
		name: '北仑区‎',
		parent: 11,
		id: 13
	}];

	$scope.data = {
		hobbies: [1, 2],
		city: 3,
	};

	// 先保留一份默认值
	$scope.origData = angular.copy($scope.data);

	$scope.reset = function() {
		$scope.data = angular.copy($scope.origData);
		that.initCity();
		$scope.myForm.$setPristine();
	}

	// 让城市关联使用
	this.findCityId = function(parent) {
		var parentId;
		angular.forEach($scope.cities, function(city) {
			if (city.id === parent) {
				parentId = city.parent;
				return;
			}
		});
		return parentId;
	}

	this.initCity = function() {
		if ($scope.data.city !== undefined) {
			$scope.data.area = this.findCityId($scope.data.city);
			$scope.data.province = this.findCityId($scope.data.area);
		}
	}

	// 第一次打开页面，初始化
	this.initCity.call(this);


	$scope.toggleHobbySel = function(id) {
		// alert(id);
		var index = -1;
		if ($scope.data.hobbies === undefined) {
			$scope.data.hobbies = [];
		} else {
			index = $scope.data.hobbies.indexOf(id);
		}


		if (index === -1) {
			$scope.data.hobbies.push(id);
		} else {
			$scope.data.hobbies.splice(index, 1);
		}
	}


}]);