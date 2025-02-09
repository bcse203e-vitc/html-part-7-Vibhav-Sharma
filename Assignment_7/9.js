<button onclick="changeColor('red')">Red</button>
<button onclick="changeColor('green')">Green</button>
<button onclick="changeColor('blue')">Blue</button>
<button onclick="changeColor()">Random</button>

<script>
function changeColor(color) {
    document.body.style.backgroundColor = color || `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
</script>
