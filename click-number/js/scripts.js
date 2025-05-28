for (var num=9;num>0;num--) {
	var elm = document.createElement("button");
	elm.innerHTML = num;
	elm.setAttribute("id", num); 
	elm.setAttribute("class", "circle"); 
	var function_name = "remove(" + num + ")" 
	elm.setAttribute("onclick", function_name);

    // 大きさをランダム
    var size = 25 + Math.floor(Math.random() * 100); 
    elm.style.width = size + "px";
    elm.style.height = size + "px";

    elm.style.fontSize = (size * 0.8) + "px";


	document.getElementById("main").appendChild(elm);

	var left_pos = 10;
	var top_pos = 100;

	left_pos = left_pos + Math.floor(Math.random() * 1000);
	top_pos = top_pos + Math.floor(Math.random() * 400);

	document.getElementById(num).style.left = "" + left_pos + "px" ;
	document.getElementById(num).style.top = "" + top_pos + "px" ;
}

var next = 1;
document.remove = function (id) {
	if (id === next) {
		document.getElementById("main").removeChild(document.getElementById(id));
		next = next + 1;
	}
}