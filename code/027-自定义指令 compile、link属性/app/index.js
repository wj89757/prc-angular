/*
 * @Author: TimJ
 * @Date:   2016-09-28 10:03:31
 * @Last Modified by:   TimJ
 * @Last Modified time: 2016-09-30 15:13:36
 */

'use strict';

var i = 0;
var myApp = angular.module('myApp', [])

.directive('customTags',function(){
	return {
		restrict : 'EA',
		template : '<div>{{user.name}}</div>',
		replace : true,
		compile : function(tElement,tAttrs,transclude){
			// 改变DOM结构
			tElement.append(angular.element('<div>{{user.name}}{{user.count}}</div>'));
			console.log(tElement);
			console.log(tAttrs);
			// 编译阶段...
			console.log('customTags compile 编译阶段..');
			return {
				// 表示在编译阶段之后，指令连接到子元素之前运行
				pre : function preLink(scope,iElement,iAttrsm,controller){
					console.log('customTags preLink..');
				},
				// 所有子元素指令都连接之后才运行
				// 这里相当于下面的link
				post : function postLink(scope,iElement,iAttrsm,controller){
					iElement.on('click', function(event) {
						event.preventDefault();
						/* Act on the event */
						// 这样不能点击触发是因为没有绑定apply事件
						// scope.user.name = 'click after';
						scope.$apply(function(){
							scope.user.name = 'click after';
							scope.user.count = ++i;
							// 进行一次监控
						})

					});
					console.log('customTags all child directive link..');
				}
			};
			// 可以直接返回postLink
			// return function(){
			// 	console.log('customTags return fun');
			// },
		},

		// 此link表示的就是postLink
		link : function(){

		}
	}
})

.directive('customTags2',function(){
	return {
		restrict : 'EA',
		replace : true,
		compile : function(tElement,tAttrs,transclude){
			console.log(tElement);
			console.log(tAttrs);
			// 编译阶段...
			console.log('customTags2 compile 编译阶段..');
			return {
				// 表示在编译阶段之后，指令连接到子元素之前运行
				pre : function preLink(){
					console.log('customTags2 preLink..');
				},
				// 所有子元素指令都连接之后才运行
				// 这里相当于下面的link
				post : function postLink(){
					console.log('customTags2 all child directive link..');
				}
			};
			// 可以直接返回postLink
			// return function(){
			// 	console.log('customTags return fun');
			// },
		},
	}
})

.directive('customTags3',function(){
	// return postLink;
	return function(){

	}
})

.controller('firstCtl', ['$scope', function($scope){
	$scope.users = [
		{
			id : 10,
			name : '张三'
		},
		{
			id : 20,
			name : '李四'
		}
	];
}])