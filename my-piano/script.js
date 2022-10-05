const keys = document.querySelectorAll(".piano button");

// Binding a click event to a button
// Add the piano's data to this event
keys.forEach(item => {
    item.addEventListener('click',() => playPiano(item.dataset.key))
})
// Get the tags for the audio
const audioElement = document.querySelector("#audioElement")

// Matching the audio to the piano's corresponding keyboard
const playPiano = key => {
    const url = `./audio/${key}.mp3`
    audioElement.src = url;
    audioElement.play()
}