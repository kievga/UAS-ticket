var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.cl1= function(){
		$scope.bb=!$scope.bb;
		$scope.cc=!$scope.cc;
		$scope.dd=!$scope.dd;
	}
	$scope.cl2= function(){
		$scope.aa=!$scope.aa;
		$scope.cc=!$scope.cc;
		$scope.dd=!$scope.dd;
	}
	$scope.cl3= function(){
		$scope.aa=!$scope.aa;
		$scope.bb=!$scope.bb;
		$scope.dd=!$scope.dd;
	}
	$scope.cl4= function(){
		$scope.aa=!$scope.aa;
		$scope.bb=!$scope.bb;
		$scope.cc=!$scope.cc;
	}
	
	$scope.depart=["Jakarta", "Medan", "Semarang", "Surabaya", "Yogyakarta"];
	$scope.coming=["Jakarta", "Medan", "Semarang", "Surabaya", "Yogyakarta"];
	
	$scope.pp2 = "0";
	$scope.pp3 = "0";
	
	$scope.pass = ["Adult", "Children"];
	$scope.from1 = ["Merak", "Tanjung Perak", "Ketapang", "Bakauheni", "Batam Centre"];
	$scope.to1 = ["Merak", "Tanjung Perak", "Ketapang", "Bakauheni", "Batam Centre"];
	
});