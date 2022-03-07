var i = 0;
var txt = "Hello! I'm JP Malloy, an intermediate programmer who is eager to learn and seeks to elevate himself to that illustrious station known as being a full stack dev.";
var speed = 50;

function typeWriter() {
	if (i < txt.length) {
		document.getElementById("about-me-typing-effect").innerHTML += txt.charAt(i);
		i++;
		setTimeout(typeWriter, speed);
	}
}
typeWriter();