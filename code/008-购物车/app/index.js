/*
 * @Author: TimJ
 * @Date:   2016-09-28 10:03:31
 * @Last Modified by:   TimJ
 * @Last Modified time: 2016-09-29 09:44:57
 */

'use strict';

var CartCtl = function($scope) {
	$scope.cart = [{
		id: 1000,
		name: 'iphone5s',
		quantity: 3,
		price: 4300
	}, {
		id: 3300,
		name: 'iphone5',
		quantity: 30,
		price: 3300
	}, {
		id: 232,
		name: 'mac',
		quantity: 8,
		price: 23000
	}, {
		id: 1001,
		name: 'ipad',
		quantity: 5,
		price: 6900
	}, ];

	/**
	 * 计算购物总价格
	 * @return {[int]} [价格]
	 */
	$scope.totalPrice = function() {
		var total = 0;
		angular.forEach($scope.cart, function(item) {
			total += item.quantity * item.price;
		});
		return total;
	}

	/**
	 * 计算总购买数
	 * @return {[int]} [购买数量]
	 */
	$scope.totalQuantity = function() {
		var total = 0;
		angular.forEach($scope.cart, function(item) {
			total += parseInt(item.quantity);
		});
		return total;
	}

	/**
	 * 找一个元素的索引
	 */
	var findIndex = function(id) {
		var index = -1;
		angular.forEach($scope.cart, function(item, key) {
			if (item.id === id) {
				index = key;
				return;
			}
		});
		return index;
	}

	/**
	 * 对某个产品添加一个数量
	 */
	$scope.add = function(id) {
		var index = findIndex(id);

		if (index !== -1) {
			++$scope.cart[index].quantity;
		}
	}

	/**
	 * 对某个产品减少一个数量
	 */
	$scope.reduce = function(id) {
		var index = findIndex(id);

		if (index !== -1) {
			var item = $scope.cart[index];
			if (item.quantity > 1) {
				--item.quantity;
			} else {
				var returnKey = confirm('是否从购物车内移除该产品');
				if (returnKey) {
					$scope.remove(id);
				}
			}
		}
	}

	/**
	 * 移除功能
	 * @param id
	 */
	$scope.remove = function(id) {
		// $scope.cart = {
		// };
		// 自动执行脏检查
		var index = findIndex(id);
		// 如果找了那个item
		if (index != -1) {
			$scope.cart.splice(index, 1);
		}
	}

	// 监听数量 如果小于 1 则让用户判断是否要删除产品
	$scope.$watch('cart', function(newValue, oldValue) {
		angular.forEach(newValue, function(item, key) {
			if (item.quantity < 1) {
				var returnKey = confirm('是否从购物车内移除该产品');
				if (returnKey) {
					$scope.remove(item.id);
				}else{
					item.quantity = oldValue[key];
				}
			}
		});
	}, true);
}