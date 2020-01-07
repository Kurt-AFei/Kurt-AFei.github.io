window.onload=function aaaaa(){
	alert("您正在进入一个未知领域")
	var myDate = new Date()
	var hours = myDate.getHours()
	var min = String(myDate.getMinutes())
	if (min.length == 1) {
		min = "0" + min;
	}
	var displayTime = String(myDate.getHours()) + ":" + min
	document.getElementById("timer").innerHTML=displayTime;
	setTimeout(show_time,800);
	function show_time(){
		var displayTime = String(myDate.getHours()) + " " + min
		document.getElementById("timer").innerHTML=displayTime;
		setTimeout(show_time1,800);
	}
		function show_time1(){
		var displayTime = String(myDate.getHours()) + ":" + min
		document.getElementById("timer").innerHTML=displayTime;
		setTimeout(show_time,800);
	}
}