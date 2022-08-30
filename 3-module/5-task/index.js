const inputData = '1 и -5.8 или 10 хотя 34 + -5.3 и 73';

const minMaxObj = {}


// function getMinMax(str) {

//   let arr = str
//     .split(' ')
//     .filter((arg) => Number.isInteger(parseInt(arg)))
//     .map((arg) => arg.includes('.') ? parseFloat(arg) : parseInt(arg))
//     .sort((a, b) => a - b)
//   return { min: arr[0], max: arr[arr.length - 1] }

// }

function getMinMax(str) {

  let arr = str
    .split(' ')
    .filter((arg) => Number.isInteger(parseInt(arg)))
    .map((arg) => arg.includes('.') ? parseFloat(arg) : parseInt(arg))
  return { min: Math.min.apply(0, arr), max: Math.max.apply(0, arr) }

}






