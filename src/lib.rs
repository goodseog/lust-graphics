extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

#[wasm_bindgen]
pub struct DougsClient {
}

#[wasm_bindgen]
impl DougsClient {
    #[wasm_bindgen(constructor)]
    pub fn new() -> Self {
        log("New was hit");
        Self {
        }
    }

    pub fn update(&mut self, time: f32, height: f32, width: f32) -> Result<(), JsValue> {
        log("Update was hit");
        Ok(())
    }

    pub fn render(&self) {
        log("Render was hit");
    }
}