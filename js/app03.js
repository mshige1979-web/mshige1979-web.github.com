/**
 * 入力項目の設定サンプル
 */
'use strict';
(function() {
	// ng-appのidと紐付け
	var app = angular.module('sample03', []);
	
	// コントローラーのバインド
	app.controller('controller03', ['$scope', function ($scope) {
		
		// 初期化
		$scope.count1 = "0";
		$scope.check1 = "0";
		
	}]);
	
})();
