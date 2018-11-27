const js = import("./wasm/rust_wasm_hello_world");

js.then(js => {
  js.greet("World!");
})