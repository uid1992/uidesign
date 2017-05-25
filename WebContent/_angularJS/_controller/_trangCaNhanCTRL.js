app.controller('trangCaNhanCTRL',function($scope,$stateParams){
 
//	/*cấu trúc dữ liệu whoCanViewStatus*/
	var whoCanViewStatus=[
		{_whoViewIcon:'glyphicon glyphicon-globe',_whoViewState:'Mọi người'},
		{_whoViewIcon:'glyphicon glyphicon-road',_whoViewState:'Bạn bè'},
		{_whoViewIcon:'glyphicon glyphicon-user',_whoViewState:'Chỉ mình tôi'},
		
	];
	
	$scope._name='nguyễn tiến';
	$scope.trangthai='Viết nội dung tại đây';
	$scope.images;
	var information_post=[{ 
		_status:[ 
			{
				_id:1,
				_name:'nguyễn tiến',
				_status_content:'Cảm ơn tạo hoá đã không ban tặng cho con nhện 2 chiếc cánh giống như ml gián 😫',
				_status_post_icon:'glyphicon glyphicon-globe',
				_status_post:'Công khai',
				_imgSrc:'',
				_time:new Date('2017/05/13'),
				_like:0,
				_command:0,
				_share:0
				 
			}			 
		]		
	}];
	
	$scope.whoCanViewStatus=whoCanViewStatus;
	$scope.information_post=information_post;
	
	$scope.pustelm=function(){
		
		console.log($stateParams.icon);
		console.log($stateParams.who);
		 
		
		
		
		console.log($scope._name);
		var _idnum=information_post[0]['_status'].length++;
		console.log(_idnum);
		information_post[0]['_status'].push({
			"_id":_idnum, 
			"_name":$scope._name,
			"_status_content":$scope.trangthai,
			"_time":new Date(),
			
			_status_post_icon:$stateParams.icon,
			_status_post:$stateParams.who,
			_imgSrc:$scope.images,
			
			_like:0,
			_command:0,
			_share:0
			
			 
		});

		console.log(information_post);
		
		$scope.trangthai='Viết nội dung tại đây';
		$('.modal').modal('hide'); 
	}
	$scope.like=function(informationPost){
		informationPost._like++;
	} 
	$scope.share=function(informationPost){
		informationPost._share++;
	}
	$scope.openDialog =  function(){
		$('.modal').modal('show'); 
	}
	 
	
	
	

	
});