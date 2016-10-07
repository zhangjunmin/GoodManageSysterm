(function($){
	$('#btn_add').on('click',function(){
		var cargo = {
			user: '张三', //定义一个属性name，类型为String
			category: '振金',
			number: 40,
			amount: 30000
		}
		$.ajax({
			url:'/goods',
			type:'post',
			dataType:'json',
			data:cargo,
			success:function(){
				console.log('1');
			},
			error:function(){
				console.log('0');
			}
		})
	})
})(jQuery)