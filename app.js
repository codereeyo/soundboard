const sounds = ['boss', 'rizz', 'steam', 'wow', 'nope'];
const buttonsContainer = document.querySelector('.buttons-container');

sounds.forEach(function (sound){
    const button = document.createElement('button');
    button.classList.add('btn-sounds');

    button.innerText = sound;

    button.addEventListener('click', function(){
        stopSound();
        document.getElementById(sound).play();
    })

    buttonsContainer.appendChild(button);
})

function stopSound(){
    sounds.forEach(function (sound){
        const soundClip = document.getElementById(sound);

        soundClip.pause();
        soundClip.currentTime = 0;
    })
}