var database=[{
	_trangThaiXem:[
		{_id:0,_name:'Mọi người',_icon:'glyphicon glyphicon-globe'},
		{_id:1,_name:'Bạn bè',_icon:'glyphicon glyphicon-user'},
		{_id:2,_name:'Chỉ mình tôi',_icon:'glyphicon glyphicon-lock'}, 
		],
	_user:[
		{_id:0,_firstName:'Nguyễn',_lastName:'Tiến',_avatar:'uid_0.jpg',_email:'tiennguyenhtc@gmail.com',_pass:'123456'},
		{_id:1,_firstName:'Nguyễn',_lastName:'Sáu',_avatar:'glyphicon glyphicon-heart-empty',_email:'saunguyenhtc@gmail.com',_pass:'123456'},
		{_id:2,_firstName:'Chu Thanh',_lastName:'Xuân',_avatar:'glyphicon glyphicon-grain',_email:'xuan@gmail.com',_pass:'123456'},
		{_id:3,_firstName:'Nguyễn',_lastName:'Nam',_avatar:'glyphicon glyphicon-pushpin',_email:'namnguyenhtc@gmail.com',_pass:'123456'},		
		],
	_status:[
		{
			_id:0,
			_idUser:0,
			_idView:0,
			_name:'Nguyễn Tiến',
			_picture:'img/uid_0.jpg',
			_status:'.... em vẫn là một nỗi hối tiếc .....',
			_img:'img/timeline_.png',
			_time:new Date(),
			_like:0,
			_share:0,
			_comment:[
				{
					_id:2,  
					_time:new Date(),
					_comment:'đăng toàn cái status đâu không ',
					_img:'img/sale.png',
					_like:0,
					_rely:[
						{
							_id:2,  
							_time:new Date(),
							_comment:'đăng toàn cái status đâu không ',
							_img:'img/sale.png',
							_like:0,
						}	
					],
				}	
			], 
		}
		],
	_message:[{}],
	_trangCaNhan:[{}],
	
}];



var statusJoinUser=[]; /* initital object statusJoinUser  */

/*  execute SQL to join*/
var exeStatusJoinUser=function(){
	
	
	/* mapping object to database */
	var status=database[0]._status;
	var user=database[0]._user;
	var trangThaiXem=database[0]._trangThaiXem;
	 
	
	for(var i=0;i<status.length;i++){ 
		var sql={}; /*initial object sql  */
		var indexUser=user.map(function(d){return d['_id']}).indexOf(status[i]._idUser); /* find index Object */
		var indexTrangThaiXem=trangThaiXem.map(function(d){return d['_id']}).indexOf(trangThaiXem[i]._id); /* find index Object */
		 
		/* set value to Object */
		sql._id=status[i]._id;
		sql._name=user[indexUser]._firstName+' '+user[indexUser]._lastName;
		sql._whoCanView=trangThaiXem[indexTrangThaiXem]._name;
		sql._icon=trangThaiXem[indexTrangThaiXem]._icon; 
		sql._avatar=user[indexUser]._avatar;
		sql._img=status[i]._img;
		sql._status=status[i]._status;
		sql._time=status[i]._time;
		sql._like=status[i]._like;
		sql._share=status[i]._share; 
		sql._id=status[i]._id ;
		sql._comment=status[i]._comment;
		
		/* return all value to statusJoinUser */
		statusJoinUser.push(sql);	
	} 
	
} 
/* execute sql */
exeStatusJoinUser();


 