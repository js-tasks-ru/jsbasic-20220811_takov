/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
// имя не пустое, без пробелов, минимум 4 символа.

let name;

function isValid(name) {


  if (!name || name.length < 4 || name.includes(' ')) {

    return false;

  } else {

    return true;


  }

}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
