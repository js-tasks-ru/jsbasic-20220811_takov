let friends = [
  {
    firstName: 'Artsiom',
    lastName: 'Mezin'
  },
  {
    firstName: 'Ilia',
    lastName: 'Kantor'
  },
  {
    firstName: 'Christopher',
    lastName: 'Michael'
  }
];




function makeFriendsList(friends) {

  let list = document.createElement('ul')
  document.body.append(list)
  
  for (let i = 0; i < friends.length; i++) {
    let item = document.createElement('li')
    item.append(`${friends[i].firstName + ' ' + friends[i].lastName}`)
    list.append(item)
  }

  return list

}


// function makeFriendsList(friends) {

//   let list = document.createElement('ul')
//   document.body.append(list)
  
//   for (let i = 0; i < friends.length; i++) {
//     let item = document.createElement('li')
//     item.innerHTML = `${friends[i].firstName + ' ' + friends[i].lastName}`
//     list.append(item)
//   }

//   return list

// }

document.body.appendChild(makeFriendsList(friends));
