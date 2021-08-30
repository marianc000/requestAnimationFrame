let previous = {};

function log(method) {
    const now = Date.now();
    console.log(method,now - previous[method]);
    previous[method] = now;
}

function frame() {
    log("frame");
    requestAnimationFrame(frame);
}

function timeout() {
    log("timeout");
    setTimeout(timeout);
}

//timeout();
frame();