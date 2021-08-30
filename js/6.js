function frame() {
    console.log(">frame");
    root.innerHTML='Frame'
    requestAnimationFrame(frame);
}

function timeout() {
    console.log(">timeout");
    root.innerHTML='Timeout'
    setTimeout(timeout);
}
timeout();
frame();