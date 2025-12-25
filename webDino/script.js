const player = document.getElementById('char')


document.addEventListener('keydown', (event) => {
  if (event.key === ' ') {
    player.classList.add('jump')
  }
  setTimeout(() => {
    player.classList.remove('jump')
  },700)
})


// function charJump(){
//   return 
// }

