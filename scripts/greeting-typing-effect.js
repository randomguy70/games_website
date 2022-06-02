var greetingDiv;
var greetingTxt;

var nameDiv;
var nameTxt;

window.addEventListener('load', function ()
{
	greetingDiv = document.getElementById("greeting-animation");
	greetingTxt = greetingDiv.innerHTML;
	greetingDiv.innerHTML = "";
	
	nameDiv = document.getElementById("my-name-animation");
	nameTxt = nameDiv.innerHTML;
	nameDiv.innerHTML = "";
	
	typeGreeting();
})

var i = 0;
var speed;

function typeGreeting()
{
	if (i < greetingTxt.length)
	{
		var char = greetingTxt[i];
		
		if(char === " ") {speed = 0}
		else if(char === "!" || char === ".") {speed = 750}
		else {speed = 70}
		
		greetingDiv.innerHTML += char;
		i++;
		setTimeout(typeGreeting, speed);
	}
	else
	{
		i = 0;
		typeName();
	}
}

function typeName()
{
	if (i < nameTxt.length) {
		var char = nameTxt[i];
		
		if(char === " ") {speed = 0}
		else if(char === "!" || char === ".") {speed = 750}
		else {speed = 70}
		
		nameDiv.innerHTML += char;
		i++;
		setTimeout(typeName, speed);
	}
}