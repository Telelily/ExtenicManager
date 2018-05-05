$(document).ready(function(){
	/*$(".btn2").click(function(){
		 window.location.href = "gldsy.html";
	});*/
$(".btn1").click(function(){
		 window.location.href = "hytjcg.html/";
	});

var userId = "123";

$.ajax({
		type:"get",
		url:"getinfo/getorgbyleave",
		dataType:"json",
		data:{
			userId:userId,
			},
		async:true,
		success:function(data){
			/*一级机构的构建*/
			var FirstDepartment = '';
			FirstDepartment += '<option value=""></option>';
			for(var i = 0; i < data.length; i++){
				FirstDepartment += '<option value="'+ data.organizationId +'">'+ data.organizationName +'</option>';
			}
			$('#FirstDepartment').html(FirstDepartment);
			/*一级机构构建*/
		},
		error:function(data){
		}
	});

});