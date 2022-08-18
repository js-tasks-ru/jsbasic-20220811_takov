// function isEmpty(obj) {
//   for (let key in obj) {
//     return false;
//   }
//   return true;
// }


function isEmpty(obj) {
  const values = Object.keys(obj); 
  if (values.length == 0) {
    return true;
  }
  if (values.length !== 0) {
    return false
  }
}

let schedule = {};

isEmpty(schedule); // true

schedule["8:30"] = "подъём";

isEmpty(schedule);



