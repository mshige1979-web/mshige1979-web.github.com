/**
 * 初期表示データチェック用サンプル
 */
'use strict';
(function() {
	// ng-appのidと紐付け
	var app = angular.module('sample01', []);
	
	// コントローラーのバインド
	app.controller('controller01', ['$scope', function ($scope) {
		$scope.hello = "Hello Angular Test!";
	}]);
	
})();
