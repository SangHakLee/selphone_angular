'use strict';

// app.controller('loginModalCtrl', ['$scope', '$uibModal', function($scope, $uibModal){
app.controller('loginModalCtrl', ['$scope', 'ngDialog', function($scope, ngDialog){
	
/*
	$scope.clickLoginBtn = function(){
		var modalInstance = $uibModal.open({
	      templateUrl: '../views/login.html',
	      controller: 'ModalInstanceCtrl'
	    });
		
		modalInstance.result.then(function () {
	      
	    }, function () {
	      
	    });
		
	}
*/
	$scope.clickLoginBtn = function(){
		ngDialog.open({ template: '../views/login.html' });
	};
	
	

}]);


app.controller('loginCtrl', ['$scope', '$window', function($scope, $window){
	
	$scope.a = function(){
		cosole.log('aaa')
	}
	$scope.loginWithKakaoBtn = function(){
// 		alert('aaa')
		$window.open('../views/loginKakao.html', '_blank', 'width=500,height=400', function(){


		});

	}

}]);

app.controller('loginKakaoCtrl', ['$scope', '$rootScope', function($scope, $rootScope){
	
	$scope.a = function(){
		cosole.log('aaa')
	}
	$scope.loginWithKakaoBtn = function(){
// 		alert('aaa')
		$window.open('../views/loginKakao.html', '_blank', 'width=500,height=400', function(){


		});

	}

}]);

/*
app.controller('ModalInstanceCtrl', function ($scope, $modalInstance) {


  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});
*/