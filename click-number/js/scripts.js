for (var num=9;num>0;num--) {
	var elm = document.createElement("button");
	elm.innerHTML = num;
	elm.setAttribute("id", num); 
	elm.setAttribute("class", "circle"); 
	var function_name = "remove(" + num + ")" 
	elm.setAttribute("onclick", function_name);

    // 数字ごとに色を変える
    var colors = [
        "#e57373", // 9
        "#f06292", // 8
        "#ba68c8", // 7
        "#64b5f6", // 6
        "#4db6ac", // 5
        "#81c784", // 4
        "#ffd54f", // 3
        "#ffb74d", // 2
        "#a1887f"  // 1
    ];
    elm.style.backgroundColor = colors[9 - num];

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