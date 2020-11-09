

function playSound(KeyboardEvent){
    const audio = document.querySelector(`audio[data-key="${KeyboardEvent.code}"]`);
    if (!audio) return; // stop the function if no sound associated
    const key = document.querySelector(`.key[data-key="${KeyboardEvent.code}"]`);
    audio.currentTime = 0; // Rewind at the start
    audio.play();
    key.classList.add('playing');
};

function removeTransition(e){
    if (e.propertyName !== 'transform') return; // skip it if it's not a transform property
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);