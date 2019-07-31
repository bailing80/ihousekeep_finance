$(document).ready(function() {
	// 初始化就查询数据
	commit();
});

    function commit(){
    var order_no = "<%=out_trade_no %>";
    
	var order_time = $("#s").val();
	var saler_id = $("#out_trade_no").val();
	var pay_type = $("#pay_away").val();
    var pay_money = $("#total_amount").val();
	var obj = new Object();
	obj.order_time = order_time;
	 alert(order_no);
	$.ajax({
		url :getRootPath()+"/Test_Controller_4W/add_test.action",
		data : obj,
		success : flush
	});
}