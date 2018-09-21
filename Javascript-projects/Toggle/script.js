var colorDec = 0;

function getHexColor(dec) {
    var raw = dec.toString(16);
    var zeros = "";
    for (var i = 0; i < 6 - raw.length; i++) {
        zeros += "0";
    }
    return "#" + zeros + raw;
}

function switchColor() {
    colorDec = (colorDec + 1) % Math.pow(256, 3);
    var newColor = getHexColor(colorDec);
    document.getElementById("box").style.background = newColor;
}
