
import("/scripts/snake_wasm.js").then((js) => {
	console.log("function: ", js);
	js.default()
		.then( () => {
			js.greet("WebAssembly with NPM");
		});
});



