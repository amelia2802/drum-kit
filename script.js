import {dataArray} from "./data.js"

const keyboardEl = document.getElementById("keyboard")

let keyBody = ""

dataArray.forEach(element => {
    keyBody += `
        <button id="${element.id}" class="key">
            <kbd>${element.key}</kbd>
            <p class="type">${element.type}</p>
            <audio id="audio" src=${element.url}></audio>
        </button>
    `
});

keyboardEl.innerHTML = keyBody

keyboardEl.addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') {
        const audio = event.target.querySelector('.audio');
        if (audio) {
            audio.play();
        }
    }
})

