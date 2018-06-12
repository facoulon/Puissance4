// function generate_table()
var body = document.getElementsByTagName("body")[0];
var tbl = document.createElement("table");
var commandTable = document.createElement("table");
body.appendChild(commandTable);

for (var k = 0; k < 3; k++){
  var cellC = document.createElement("td");
  commandTable.appendChild(cellC);
  cellC.innerHTML = "";
}
commandTable.setAttribute('border', '2');

for (var i = 0; i < 3; i++) {
  var row = document.createElement("tr");
  row.className = "row"+i;
  for (var j = 0; j < 3; j++) {
      var cell = document.createElement("td");
      cell.className = "cell" +j;
      row.appendChild(cell);
      }
    tbl.appendChild(row);
    }
    body.appendChild(tbl);
    tbl.setAttribute("border", "2");


// var plateau = [
//   ['T','C','F','R','K','F','C','T'],
//   ['P','P','P','P','P','P','P','P'],
//   [' ',' ',' ',' ',' ',' ',' ',' '],
//   [' ',' ',' ',' ',' ',' ',' ',' '],
//   [' ',' ',' ',' ',' ',' ',' ',' '],
//   [' ',' ',' ',' ',' ',' ',' ',' '],
//   ['p','p','p','p','p','p','p','p'],
//   ['t','c','f','k','r','f','c','t'] ];
//
// console.log(plateau);

commandTable[0] = "josé";
