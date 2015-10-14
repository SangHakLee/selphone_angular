'use strict';



app.factory('selphonePostsFactory', function($http){
	return{
		getSelphonePosts : function(callback){
			return $http.get("http://54.178.140.51/selphone-posts").success(callback);
		}
	}
});


