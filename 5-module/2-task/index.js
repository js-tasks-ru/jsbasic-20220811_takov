let button = document.querySelector('.toggle-text-button');
let text = document.querySelector('#text');

function toggleText(button, text) {

  button.addEventListener('click', () => {
    text.toggleAttribute('hidden');
  })

}

toggleText(button, text)
