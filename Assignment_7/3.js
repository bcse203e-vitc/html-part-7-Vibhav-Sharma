<input type="number" id="num1">
<input type="number" id="num2">
<select id="operation">
    <option value="+">+</option>
    <option value="-">-</option>
    <option value="*">*</option>
    <option value="/">/</option>
</select>
<button onclick="calculate()">Calculate</button>
<p id="result"></p>

<script>
function calculate() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let op = document.getElementById("operation").value;
    document.getElementById("result").innerText = eval(`${num1} ${op} ${num2}`);
}
</script>
