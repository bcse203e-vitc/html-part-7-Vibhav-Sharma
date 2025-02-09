<input type="number" id="rows" placeholder="Rows">
<input type="number" id="cols" placeholder="Columns">
<button onclick="generateTable()">Generate Table</button>
<table id="table"></table>

<script>
function generateTable() {
    let rows = document.getElementById("rows").value;
    let cols = document.getElementById("cols").value;
    let table = "<table border='1'>";
    for (let i = 0; i < rows; i++) {
        table += "<tr>";
        for (let j = 0; j < cols; j++) {
            table += "<td>Cell</td>";
        }
        table += "</tr>";
    }
    document.getElementById("table").innerHTML = table + "</table>";
}
</script>
