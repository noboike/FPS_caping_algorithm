function lockFps(fps) {
    function lerp(p1, p2, t) {
        return p1 + (p2 - p1) * t;
    }
    
    function stepsEasing(x, s) {
        return parseInt(s * x) / s;
    }
    let lastFrameTime = 0;
    function loop_gzE4Fq8H(timeStamp) {
        
        let v = lerp(0, 500, stepsEasing((timeStamp % 1000) / 1000, fps));
       
        if (v != lastFrameTime) {
            // your logics here
        }
        lastFrameTime = v;
        requestAnimationFrame(loop_gzE4Fq8H);
    }
    requestAnimationFrame(loop_gzE4Fq8H);
}

lockFps(60);
