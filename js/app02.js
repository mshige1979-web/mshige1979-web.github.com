/**
 * テキストデータを設定するサンプル
 */
'use strict';
(function() {
	// ng-appのidと紐付け
	var app = angular.module('sample02', []);
	
	// コントローラーのバインド
	app.controller('controller02', ['$scope', function ($scope) {
		$scope.name = "ほげほげ";
	}]);
	
})();
