const player = document.getElementById('char')
const block = document.getElementById('block')


document.addEventListener('keydown', (event) => {
  if (event.key === ' ') {
    if (player.classList != 'jump') {
      player.classList.add('jump')
    }
  }
  setTimeout(() => {
    player.classList.remove('jump')
  },500)
})


const checkDead = setInterval(() => {
  const characterTop = parseInt(window.getComputedStyle(player).getPropertyValue('bottom'))
  const blockRight = parseInt(window.getComputedStyle(block).getPropertyValue('right'))

  // if (blockRight)
}, 10)