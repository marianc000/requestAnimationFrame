function timeout() {
    root.innerHTML='Timeout'
    setTimeout(timeout);
}
timeout();
