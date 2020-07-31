const rust = import("./pkg/rust_3d_demo");
const canvas = document.getElementById("rustCanvas");
const gl = canvas.getContext("webgl", { antialias: True });

rust.then((m) => {
  if (!gl) {
    alert("Failed to initialize WebGL");
    return;
  }

  gl.enable(gl.BLEND);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

  const FPS_THROTTLE = 1000.0 / 30.0; // milliseconds / frames
  let lastDrawTime = -1; // In ms

  function render() {
    window.requestAnimationFrame(render);
    const currTime = Date.now();

    if (currTime >= lastDrawTime + FPS_THROTTLE) {
      lastDrawTime = currTime;
      // Rust Update Call
      // Rust Render Call
    }
  }

  render();
});
