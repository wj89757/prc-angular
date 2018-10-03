/*
 * @Author: TimJ
 * @Date:   2016-09-28 10:03:31
 * @Last Modified by:   TimJ
 * @Last Modified time: 2016-10-02 18:37:32
 */

'use strict';


var myApp = angular.module('myApp', [] ,['$provide',function(){
	// $provide.factory();
	// $provide.service();
	// $provide.constant();
}])

.config(function(APIKEY) {
	console.log(APIKEY);
	console.log('config');
})

// 在config之后，controller等其他服务之前
.run(function(){
	console.log('run');
})

// 可以注入任何方法
.constant('APIKEY', 'xxxx')

// 只能注入controller ...factory,service
.value('version', '1.0.0')

.controller('firstCtl', ['$scope','APIKEY', function($scope,APIKEY) {
	console.log(APIKEY);
	console.log('ctl');
}])
