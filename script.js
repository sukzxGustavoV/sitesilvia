document.getElementById("increase-font-size").addEventListener("click", function() {
    changeFontSize(1.5);
  });
document.getElementById("decrease-font-size").addEventListener("click", function() {
    changeFontSize(-1.5);
  });

    function changeFontSize(step) {
    var currentFontSize = parseFloat(getComputedStyle(document.body).fontSize); 
    var newFontSize = currentFontSize + step;
    document.body.style.fontSize = newFontSize + "px";
}
    document.addEventListener('DOMContentLoaded', function() {
        var meuVideo = document.getElementById('meuVideo');

        document.addEventListener('keydown', function(event) {
            if (event.code === 'Space') { 
                event.preventDefault(); 
                if (meuVideo.paused) {
                    meuVideo.play();
                } else {
                    meuVideo.pause();
                }
            }
        });
    });
