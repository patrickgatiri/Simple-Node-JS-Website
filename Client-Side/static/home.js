/*
    Define an on click listener for the button.
*/
var clicked = function(){
    console.log(" Button clicked! Get random number");

    // Make request to the backend server.
    var serverRequest = new XMLHttpRequest();
    serverRequest.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
		var serverResponse = JSON.parse(this.responseText);
		var result_string = "The random number is " + serverResponse.number;

		var result_paragraph = document.getElementById("result");
		result_paragraph.innerHTML = result_string;

		console.log(result_string);
        }
    };

    // Within the pod, the server listens on port 3000.
    //Implementation on baremetal server.
    serverRequest.open('GET', "http://nodejs-backend-service.backend:3000/random", true);

    serverRequest.send();
}

var getRandomNumber = document.getElementById("getRandomNumber");
getRandomNumber.addEventListener("click", () => clicked());
