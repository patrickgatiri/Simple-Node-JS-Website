const express = require('express');
const cors = require('cors');
const app = express()
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
	res.set("Connection", "Close");
	res.send("This is a random number generator. Send a GET request to \"/random\" in order to get a random number between 0 and 100.\n");
});

app.get('/random', function (req, res){
	console.log(req.headers); 

	res.set("Connection", "Close");
	res.json({
		number:Math.floor(Math.random()*Math.floor(100))
	});
});

app.listen(port, () => console.log(`Kubernetes Test Application listening on port ${port}!`))
