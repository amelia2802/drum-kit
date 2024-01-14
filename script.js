import { dataArray } from "./data.js";

const keyboardEl = document.getElementById("keyboard");

let keyBody = "";

dataArray.forEach(element => {
    keyBody += `
        <button id="${element.id}" class="key">
            <kbd>${element.key}</kbd>
            <p class="type">${element.type}</p>
            <audio id="audio-${element.id}" class="audio" src="${element.url}"></audio>
        </button>
    `;
});

keyboardEl.innerHTML = keyBody;

dataArray.forEach(element => {
    document.getElementById(`${element.id}`).addEventListener('click', function () {
        document.getElementById(`audio-${element.id}`).play();
    })
})
