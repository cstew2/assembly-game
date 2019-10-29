document.addEventListener("DOMContentLoaded", main);

function main() {
	document.getElementById("save").addEventListener("click", save);

	var json_string = get_json();
	var json_obj = JSON.parse(json_string);
	
}

function get_json() {
	var req = new XMLHttpRequest();
	req.overrideMimeType("application/json");
	var data;

	req.onload = function(e) {
		data = req.response;
	}

	req.open("GET", "./challenges.json", false);
	req.responseType = "data";
	req.send();
	return data;
}

function save() {
	var json_string = document.getElementById("textbox").value;
	save_json(json_string);
}

function save_json(json_string) {
	var req = new XMLHttpRequest();

	req.open("POST", "./challenges2.json");
	req.setRequestHeader("Content-Type", "application/json");

	req.onreadystatechange = function () {
		if(req.readyState == 4 && req.status == 200) {
			console.log(req.responseText);
		}
	}

	req.send(json_string);
}

function create_challenge_grid(challengesobj) {
	for(var i = 0; i < challengesobj.challenge_count; i++) {	
		var div;
		var button;
		var p;
		var h3;

		h3 = document.createElement("h3");
		h3.appendChild(document.createTextNode(challengesobj.challenges[i].name));

		p = document.createElement("p");
		p.appendChild(document.createTextNode(challengesobj.challenges[i].description));

		button = document.createElement("button");
		button.appendChild(document.createTextNode("Start"));
		button.setAttribute("class", "button")
		button.setAttribute("id",  "start_challenge" + i)


		div = document.createElement("div");
		div.setAttribute("class", "challenge");
		div.appendChild(h3);
		div.appendChild(p);
		div.appendChild(button);

		document.getElementById("challenges_grid").appendChild(div);
	}
}