app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$stateProvider
	.state('home',
		{
			url:'/',
			templateUrl:'_template/_body/_home.html',
			controller:'homeCTRL'
				
		} 
	);
	$stateProvider
	.state('root',
		{
			url:'/',
			templateUrl:'_template/_body/_home.html'
		} 
	);
	$stateProvider.state('message',{
		url:'/message',
		templateUrl:'_template/_body/_message.html'
	});
	
	$stateProvider.state('notification',{
		url:'/notification',
		templateUrl:'_template/_body/_notification.html'
	});
	
	$stateProvider.state('requestfriend',{
		url:'/requestfriend',
		templateUrl:'_template/_body/_requestFriend.html'
	});
	$stateProvider.state('trangcanhan',{
		url:'/trangcanhan',
		templateUrl:'_template/_body/_trangcanhan.html',
		controller:'trangCaNhanCTRL'
	});
	
	
	

	
	$urlRouterProvider.otherwise('/');
}]);