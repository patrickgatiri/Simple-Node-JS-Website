const express = require('express');
const path = require('path');
const app = express()

// Include the static files for the application.
app.use(express.static('static'));

const port = 1234;

app.get('/', function (req, res){
	console.log(req.headers);
	
	res.set("Connection", "Close");		
	res.sendFile(path.join(__dirname, '/static/home.html'));
});

app.listen(port, () => console.log(`Kubernetes Test Application (Front end) listening on port ${port}!`))