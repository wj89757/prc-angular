/*
 * @Author: TimJ
 * @Date:   2016-09-28 10:03:31
 * @Last Modified by:   TimJ
 * @Last Modified time: 2016-09-30 13:33:59
 */

'use strict';


var myApp = angular.module('myApp', [],['$compileProvider',function($compileProvider){
	console.log($compileProvider);

	$compileProvider.directive('customTags',function(){
		return {
			restrict : 'EA',
			template : '<div>template-tags-div</div>',
			compile :  function(){
				console.log(1);
			},
			replace : true,
		};
	});
}])

// .directive('')

