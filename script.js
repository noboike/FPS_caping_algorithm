// The gameLoop function contains game logic, animation, movement, and the gameDraw function, which draws graphics.

function lockFps(fps, gameLoop, gameDraw) {

    function stepsEasing(x, s) {
        return parseInt(s * x) / s;
    }
    let lastFrame = 0;
    function loop_gzE4Fq8H(timeStamp) {

        let currentFrame = stepsEasing((timeStamp % 1000) / 1000, fps);

        if (currentFrame != lastFrame) {
            if (gameLoop != null) {
                gameLoop(timeStamp);
            }
        }
        lastFrame = currentFrame;
        requestAnimationFrame(loop_gzE4Fq8H);
        if (gameDraw != null) {
            gameDraw();
        }
    }
    requestAnimationFrame(loop_gzE4Fq8H);
}

lockFps(60, loop, render); // Locks the framerate at 60fps
