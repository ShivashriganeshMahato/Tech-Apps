var tried = false;

function showResult() {
    if (!tried) {
        var random = Math.random();
        var result = random < 0.5 ? "You Win!" : "Nope...";
        document.getElementById("result").innerText = result;
        tried = true;
    }
}

function resetResult() {
    document.getElementById("result").innerText = "Pick a Door";
    tried = false;
}
