'use strict';

app.controller('selphonePostsCtrl', ['$scope', '$http', '$rootScope', 'selphonePostsFactory',  function($scope, $http, $rootScope, selphonePostsFactory){
	
	selphonePostsFactory.getSelphonePosts(function(results){
		console.log('results', results)		
	});

    
    //테스트
	var selphone_posts = {}
    selphone_posts.post_title = "post_title"
    selphone_posts.product_name = "TB_PRODUCT.product_name"
    selphone_posts.sell_price = "sell_price"
    selphone_posts.post_pictures = "post_pictures.split(',')[0]"
    $scope.selphone_posts = selphone_posts
/*
    http($http, 'GET', url+'/selphone-posts', null, function(isSuccess, data){
        var selphone_posts = data.results
        for (i in selphone_posts){
            selphone_posts[i].post_main_picture = selphone_posts[i].post_pictures.split(',')[0];
        }
        $scope.selphone_posts = selphone_posts
        $scope.isLogin = $rootScope.isLogin // hide show를 위한 변수
        $scope.getSelphonePost =function(selphone_post){
            // console.log('selphone_post', selphone_post);
            $scope.md_product_name = selphone_post.TB_PRODUCT.product_name
            $scope.md_sell_price = selphone_post.sell_price
            $scope.md_post_title = selphone_post.post_title
            $scope.md_post_description = selphone_post.post_description
            $scope.md_post_product_storage = selphone_post.post_product_storage
            $scope.md_post_product_telecom = selphone_post.post_product_telecom
            $scope.pictures = selphone_post.post_pictures.split(',')

            // 다음 결제창으로 넘기기 위한
            $rootScope.selphone_posts = {}
            $rootScope.selphone_posts.post_title = selphone_post.post_title
            $rootScope.selphone_posts.product_name = selphone_post.TB_PRODUCT.product_name
            $rootScope.selphone_posts.sell_price = selphone_post.sell_price
            $rootScope.selphone_posts.post_pictures = selphone_post.post_pictures.split(',')[0]
        }
    });
    $scope.clickToOpen = function () {
        ngDialog.open({ template: 'order.html' });
    };
*/
}]);