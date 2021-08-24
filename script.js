const keys = document.querySelectorAll('.key');

keys.forEach(key => {
  key.addEventListener('click', () => music(key));
});

function music(key) {

  const sound = document.getElementById(key.dataset.key);
  sound.play();
  
  //key animation
  key.classList.add('keypress');
  
  sound.addEventListener('ended', () => {
    key.classList.remove('keypress');
  });
}