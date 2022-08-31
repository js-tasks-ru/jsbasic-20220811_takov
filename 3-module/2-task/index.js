let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
  return arr.filter((elem) => elem >= a && elem <= b )
}

let filtered = filterRange(arr, 1, 4);