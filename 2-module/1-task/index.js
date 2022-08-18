let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: false
}



//Вариант перебора объекта
function sumSalary(salaries) {
  let sum = 0;
  for (let key in salaries) { //перебираем масcив используя of
    if(Number.isNaN(salaries[key]) || !isFinite(salaries[key])){ //проверка на NaN и на Infinite
      continue
    }
    if (typeof salaries[key] === 'number') { //проверка на число, но тайпофф возвращает стрингу
     sum += salaries[key];
    }
  }
  return sum;
}

// sumSalary(salaries);

//Вариант перебора массива через Object.values
// function sumSalary(salaries) {
//   const values = Object.values(salaries); //получаем массив
//   let sum = 0;
//   if (values.length == 0) return sum
//   for (let v of values) { //перебираем масиив используя of
//     if(Number.isNaN(v) || !isFinite(v)){ //проверка на NaN и на Infinite
//       continue
//     }
//     if (typeof v === 'number') { //проверка на число, но тайпофф возвращает стрингу
//      sum += v;
//     }
//   }
//   return sum;
// }

// sumSalary(salaries);


//Вариант через аккумулятор редьюсера с использованием тернарного оператора 
// function sumSalary(salaries) {
//   return Object.values(salaries).reduce((acc, v) => Number.isInteger(v) ? acc + v : acc, 0);
// }

