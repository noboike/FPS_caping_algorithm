function lockFps(fps) {

    function stepsEasing(x, s) {
        return parseInt(s * x) / s;
    }
    let lastFrame = 0;
    function loop_gzE4Fq8H(timeStamp) {

        let currentFrame = stepsEasing((timeStamp % 1000) / 1000, fps);

        if (currentFrame != lastFrame) {
            //do your work here
        }
        lastFrame = currentFrame;
        requestAnimationFrame(loop_gzE4Fq8H);
    }
    requestAnimationFrame(loop_gzE4Fq8H);
}

lockFps(60); //fps is locked at 60
