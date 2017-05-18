app.controller('homeCTRL',function($scope){
	 
//	/*cấu trúc dữ liệu whoCanViewStatus*/
	var whoCanViewStatus=[
		{_whoViewIcon:'glyphicon glyphicon-globe',_whoViewState:'Mọi người'},
		{_whoViewIcon:'glyphicon glyphicon-road',_whoViewState:'Bạn bè'},
		{_whoViewIcon:'glyphicon glyphicon-user',_whoViewState:'Chỉ mình tôi'},
		
	];
	
	$scope._name='nguyễn tiến';
	$scope.trangthai='Viết nội dung tại đây';
	
	var information_post=[{ 
		_status:[
			{
				_id:1,
				_name:'nguyễn tiến',
				_status_content:' Thỏa sức mua sách với mức giá ưu đãi NHẤT chỉ có tại Tiki.vn - MUA NGAY (y)',
				_status_post:'Công khai',
				_imgSrc:'',
				_time:new Date('2017/05/12') ,
				_like:0,
				_command:0,
				_share:0
			},
			{
				_id:2,
				_name:'nguyễn tiến',
				_status_content:'Cảm ơn tạo hoá đã không ban tặng cho con nhện 2 chiếc cánh giống như ml gián 😫', 
				_status_post:'Công khai',
				_imgSrc:'',
				_time:new Date('2017/05/13'),
				_like:0,
				_command:0,
				_share:0
				 
			},
			{
				_id:3, 
				_name:'nguyễn tiến',
				_status_content:'.',
				_status_post:'Công khai',
				_imgSrc:'',
				_time:new Date('2017/05/14'),
				_like:0,
				_command:0,
				_share:0 
			},
		]
		
	}];
	
	$scope.whoCanViewStatus=whoCanViewStatus;
	$scope.information_post=information_post;
	
	$scope.pustelm=function(){
		
		console.log($scope._name);
		var _idnum=1+information_post[0]['_status'].length++;
		console.log(_idnum);
		information_post[0]['_status'].push({
			"_id":_idnum, 
			"_name":$scope._name,
			"_status_content":$scope.trangthai,
			"_time":new Date()
			
		});

		console.log(JSON.stringify(information_post));
		
		
	}
	$scope.like=function(informationPost){
		informationPost._like++;
	}
	$scope.openDialog =  function(){
		$('.modal').modal('show');
	}
	
	

	
});