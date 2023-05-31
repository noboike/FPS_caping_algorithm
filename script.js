// The gameLoop function contains game logic, animation, movement, and the gameDraw function, which draws graphics.

function lockFps(fps, gameLoop, gameDraw) {

    let lastFrame;
    function loop(timeStamp) {

        let currentFrame = parseInt(fps * ((timeStamp % 1000) / 1000)) / fps;

        if (currentFrame != lastFrame) {
            if (gameLoop != null) {
                gameLoop(timeStamp);
            }
        }
        lastFrame = currentFrame;
        requestAnimationFrame(loop);
        if (gameDraw != null) {
            gameDraw(); // gameDraw function will sync with your monitor refresh rate for preventing stuttering
        }
    }
    requestAnimationFrame(loop);
}

lockFps(60, gameLoop, gameDraw); // Locks the framerate at 60fps
