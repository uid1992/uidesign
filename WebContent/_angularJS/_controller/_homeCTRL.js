app.controller('homeCTRL',function($scope,$stateParams,$window){
   
	
	$scope.statusJoinUser=statusJoinUser;
	$scope._trangThaiXem=database[0]._trangThaiXem;
	 
	$scope.trangthai='Viết nội dung tại đây';
	$scope.images; 
	
	var trangThaiXem=database[0]._trangThaiXem;
	var user=database[0]._user;
	
	/*đăng trạng thái*/
	$scope.postStatus=function(){
		
		console.log($stateParams._id); 
		var newStatus={
				_id:0,
				_name:'Nguyen tien',
				_whoCanView:trangThaiXem[0]._name,
				_icon:trangThaiXem[0]._icon, 
				_avatar:user[0]._avatar,
				_img:'',
				_status:$scope.trangthai,
				_time:new Date(),
				_like:0,
				_share:0,
				_comment:[{}]
			};
		
		statusJoinUser.push(newStatus);
		console.log('Trạng thái sau khi đăng ');
		console.log($scope._status);
		$scope.trangthai='Viết nội dung tại đây';
		$('.modal').modal('hide'); 
		
		 
		$scope.statusJoinUser=statusJoinUser;
	}
	$scope.index=0;
	$scope.sua=function(index){
		$scope.index=index;
		var emp= database[0]._status[index]; 
		$scope.name=emp.name,
		$scope.trangthai=emp._status, 
		
		
		$('#modal').modal('show'); 
	}
	$scope.luu=function(){
		
		console.log('start luu()');
		console.log($scope.statusJoinUser);
		 
		$scope.statusJoinUser[$scope.index]._status=$scope.trangthai;
		
		console.log(database[0]._status[$scope.index]);
		$('#modal').modal('hide'); 
		
	}
	$scope.xoaStatus=function(element){
		if($window.confirm('Bạn muốn xóa chứ')){
		 alert('remove '+element);
		  $scope.statusJoinUser.splice(parseInt(element),1);
		 }
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
	
	$scope.myFunction=function(){
		alert('ok');
	}
	
	
 
});