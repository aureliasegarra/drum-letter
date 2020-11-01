
//Fonction associate a key pressed on the keyboard with a sound
window.addEventListener('keydown', function(KeyboardEvent){
    const audio = document.querySelector(`audio[data-key="${KeyboardEvent.code}"]`);
    if (!audio) return; // stop the function if no sound associated
    const key = document.querySelector(`.key[data-key="${KeyboardEvent.code}"]`);
    audio.currentTime = 0; // Rewind at the start
    audio.play();
    console.log(key);
});