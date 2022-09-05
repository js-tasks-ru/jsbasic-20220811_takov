
let button = document.querySelector('.hide-self-button');

function hideSelf(button) {

  button.addEventListener('click', () => {
    button.hidden = true;
  })

}

hideSelf(button)
