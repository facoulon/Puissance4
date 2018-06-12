// function generate_table() {
var body = document.getElementsByTagName("body")[0];
var tbl = document.createElement("table");



for (var i = 0; i < 3; i++) {
  var row = document.createElement("tr");
  for (var j = 0; j < 3; j++) {
      var commandTable = document.createElement("div");
        var cell = document.createElement("td");
        row.appendChild(cell);
      }
      tbl.appendChild(row);
    }
    body.appendChild(commandTable);
    body.appendChild(tbl);
    tbl.setAttribute("border", "2");
// }
