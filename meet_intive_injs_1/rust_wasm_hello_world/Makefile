build-wasm:
	mkdir ./wasm
	cargo build --target wasm32-unknown-unknown
	wasm-bindgen target/wasm32-unknown-unknown/debug/rust_wasm_hello_world.wasm \
  	--out-dir ./wasm

build-js:
	npm install

build: build-wasm build-js

run:
	npm run up

up: build run