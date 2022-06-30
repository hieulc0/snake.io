const path = require("path");

const home = (req, res) => {
	res.sendFile(path.resolve(__dirname, "../views/index.html"));
};

module.exports = {
	home,
};

