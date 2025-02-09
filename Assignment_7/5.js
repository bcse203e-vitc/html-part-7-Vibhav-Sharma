document.getElementById("text").addEventListener("input", function() {
    let text = this.value;
    document.getElementById("charCount").innerText = text.length;
    document.getElementById("wordCount").innerText = text.trim().split(/\s+/).length;
});
