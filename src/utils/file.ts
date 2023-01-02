export const getStaticIconFile = (name: string): string => {
  return new URL(`../static/icons/${name}.svg`, import.meta.url).href
}

export const getStaticMusic = (name: string): string => {
  return new URL(`../static/music/${name}.mp3`, import.meta.url).href
}

export const playSound = (url) => {
  const ourAudio = document.createElement('audio') // Create a audio element using the DOM
  ourAudio.style.display = 'none' // Hide the audio element
  ourAudio.src = url // Set resource to our URL
  ourAudio.autoplay = true // Automatically play sound
  ourAudio.onended = function () {
    ourAudio.remove() // Remove when played.
  }
  document.body.appendChild(ourAudio)
}
