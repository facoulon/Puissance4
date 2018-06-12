// function generate_table()
var body = document.getElementsByTagName("body")[0];
var tbl = document.createElement("table");
var nbrColumns = 7;
var nbrRows = 6;


var commandTable = document.createElement("table");
body.appendChild(commandTable);

var playerSelect = document.createElement("img");
body.appendChild(playerSelect);
playerSelect.src = "../img/jaune.png"

for (var k = 0; k < nbrColumns; k++){
  var cellC = document.createElement("td");
  commandTable.appendChild(cellC);
}
commandTable.setAttribute('border', '2');

for (var i = 0; i < nbrRows; i++) {
  var row = document.createElement("tr");
  row.className = "row" + i;
  for (var j = 0; j < nbrColumns; j++) {
      var cell = document.createElement("td");
      cell.className = "cell" + j;
      row.appendChild(cell);
      }
    tbl.appendChild(row);
    }
body.appendChild(tbl);
tbl.setAttribute("border", "2");

var column = [];
for (var l = 0; l < nbrColumns; l++){
   column[l] = document.getElementsByClassName('cell'+ l);
}

var cpt = 0;

for (x = 0; x < nbrColumns; x++){
  commandTable.children[x].addEventListener("click",function(){
                // transformer commandTable.children en liste
    var colIndex = Array.from(commandTable.children).indexOf(this);
    if ( cpt < 42 ) {
      if (cpt % 2 == 0 ){
        column[colIndex][column[colIndex].length -1].className = "jaune";
        playerSelect.src = "../img/rouge.png";
        cpt++
      } else {
        column[colIndex][column[colIndex].length -1].className = "rouge";
        playerSelect.src = "../img/jaune.png";
        cpt++
        }
      }
    });
}
