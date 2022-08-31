
function camelize(str) {
  return str
    .split('-')
    .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
    .join('');
}


// function camelize(str) {
//   return str
//     .split('-').reduce((acc, word) => acc + word[0].toUpperCase() + word.slice(1))
// }


// function camelize(str) {
//   return str.replace(/\-[a-z]/g, x => x[1].toUpperCase())
// }
