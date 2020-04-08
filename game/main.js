import asm_game from "./src/asm_game";

document.addEventListener("DOMContentLoaded", main);

var CHALLENGES_STARTED = false;
var challengesobj = null;

function hide_element(e) {
    document.getElementById(e).style.display = "none";
}

function show_element(e) {
    document.getElementById(e).style.display = "block";
}

function show_help() {
    hide_element("title_container")
    show_element("help_container")
}

function show_title() {
    hide_element("splash_screen_container");
    hide_element("challenges_container");
    hide_element("help_container");
    hide_element("settings_container");
    hide_element("game_container");
    show_element("title_container");
}

function show_challenges() {
    hide_element("title_container");
    hide_element("game_container");
    show_element("challenges_container");
}

function show_settings() {
    hide_element("title_container");
    show_element("settings_container");
}

function show_game() {
    hide_element("challenges_container");
    show_element("game_container");
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
	button.setAttribute("class", "button");
	button.setAttribute("id",  "start_challenge" + parseInt(i, 10));
	

	div = document.createElement("div");
	div.setAttribute("class", "challenge");
	div.appendChild(h3);
	div.appendChild(p);
	div.appendChild(button);

	document.getElementById("challenges_grid").appendChild(div);
    }
    for(var i=0; i < challengesobj.challenge_count; i++) {
	document.getElementById(("start_challenge" + parseInt(i, 10))).addEventListener("click", function(){start_game(i)});
    }
}

function start_game(challenge_num) {
    show_game();
    document.getElementById("game_to_challenges").addEventListener("click", show_challenges);
    var g = new asm_game();
}

function textarea_control() {

}

function start_challenges() {
    document.getElementById("challenge_to_title").addEventListener("click", show_title);
    if(CHALLENGES_STARTED != true) {
	CHALLENGES_STARTED = true;
	var challengesobj = null;
	parse_json(create_challenge_grid);
    }
    show_challenges();
}

function start_help() {
    document.getElementById("help_to_title").addEventListener("click", show_title);
    show_help();
}

function start_settings() {
    document.getElementById("settings_to_title").addEventListener("click", show_title);
    show_settings();
}

function parse_json(callback) {
    var httpRequest = new XMLHttpRequest();
    var response = null;
    httpRequest.onreadystatechange = function() {
	if(httpRequest.readyState == 4 && httpRequest.status == 200) {
	    response = httpRequest.responseText;
	    callback(JSON.parse(response));
	}
    };
    httpRequest.open("GET", "../challenges.json", true);
    httpRequest.send();
}

function main() {
    //show_element("splash_screen_container")
    //setTimeout(show_title, 5000);
    show_title()
    
    document.getElementById("choose_challenges").addEventListener("click", start_challenges);
    document.getElementById("choose_help").addEventListener("click", start_help);
    document.getElementById("choose_settings").addEventListener("click", start_settings);

}
