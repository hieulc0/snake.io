console.log("run index.js file");

import("../../node_modules/snake-wasm/snake_wasm").then((js) => {
	js.greet("WebAssembly with NPM");
});



