const express = require("express");


// local modules
const route = require("./routes/route.js");

// server initialization
const app = express();
const PORT = 8080;


app.use(express.static("public"));
app.use("/scripts", express.static(__dirname + "/node_modules/snake-wasm"));

// router
app.use("/", route);

app.listen(PORT, (error) => {
	if (!error) {
		console.log("App is listening on port ", PORT);
	}
	else {
		console.log("App cannot start.", error);
	}
});

