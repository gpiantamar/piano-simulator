const pianoKeys = document.querySelectorAll(".piano-keys .key");

let audio = new Audio("./src/tunes/a.wav");
let mappedKeys = [];
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheck = document.querySelector(".keys-check input"); // Corrigido erro de digitação

// Função para tocar o som da tecla
const playTune = (key) => {
    audio.src = `./src/tunes/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150);
};

// Adiciona evento de clique para cada tecla do piano
pianoKeys.forEach((key) => {
    console.log(key.dataset.key);
    key.addEventListener("click", () => playTune(key.dataset.key));
    mappedKeys.push(key.dataset.key);
});

// Adiciona evento de tecla pressionada
document.addEventListener("keydown", (e) => {
    if (mappedKeys.includes(e.key)) {
        playTune(e.key);
    }
});

// Manipula o volume do áudio
const handleVolume = (e) => {
    audio.volume = e.target.value;
};

// Mostra ou esconde as teclas
const showHideKeys = () => {
    pianoKeys.forEach((key) => key.classList.toggle("hide"));
};

// Adiciona eventos de entrada de volume e clique
volumeSlider.addEventListener("input", handleVolume);
keysCheck.addEventListener("click", showHideKeys);
