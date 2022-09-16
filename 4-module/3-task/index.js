function highlight(table) {

  const headCells = table.tHead.rows[0].cells;
  let indexStatus;
  let indexGender;
  let indexAge;

  for (let i = 0; i < headCells.length; i++) {
    if (headCells[i].innerText.toLowerCase() === 'status') {
      indexStatus = i;
    }
    if (headCells[i].innerText.toLowerCase() === 'gender') {
      indexGender = i;
    }
    if (headCells[i].innerText.toLowerCase() === 'age') {
      indexAge = i;
    }
  }

  for (let row of table.tBodies[0].rows) {
    if (!row.cells[indexStatus].hasAttribute('data-available')) {
      row.hidden = true;
    }

    if (row.cells[indexGender].innerText.toLowerCase() === 'm') {
      row.classList.add('male');
    }

    if (row.cells[indexGender].innerText.toLowerCase() === 'f') {
      row.classList.add('female');
    }

    if (row.cells[indexStatus].getAttribute('data-available') === 'true') {
      row.classList.add('available');
    } 
    
    if (row.cells[indexStatus].getAttribute('data-available') === 'false'){
      row.classList.add('unavailable');
    }

    if (parseInt(row.cells[indexAge].innerText) < 18) {
      row.style.textDecoration = 'line-through';
    }
  }
}


highlight(table);