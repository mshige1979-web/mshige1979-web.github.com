/**
 * リスト表示
 */
'use strict';
(function() {
	// ng-appのidと紐付け
	var app = angular.module('sample04', []);
	
	// コントローラーのバインド
	app.controller('controller04', ['$scope', function ($scope) {
		
		// 初期化
		var data = [{
				aaa: ["aaa", "bbb", "ccc"],
				bbb: [{
					name: "サンプル１",
					count: 10
				},{
					name: "サンプル２",
					count: 50
				},{
					name: "サンプル３",
					count: 150
				}
			]
		},{
				aaa: ["xxx", "yyy", "zzz"],
				bbb: [{
					name: "サンプルＡ",
					count: 5000
				},{
					name: "サンプルＢ",
					count: 1200
				},{
					name: "サンプルＣ",
					count: 9999
				}
			]
		}
		];
		
		// 初期値
		$scope.lists = data[0].aaa;
		$scope.items = data[0].bbb;
		
		// クリック押下時の設定
		$scope.display = function(idx){
			$scope.lists = data[idx].aaa;
			$scope.items = data[idx].bbb;
		};
		
	}]);
	
})();
