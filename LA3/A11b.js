function calculateSI() {
    var p = parseFloat(document.getElementById("principal").value);
    var r = parseFloat(document.getElementById("rate").value);
    var t = parseFloat(document.getElementById("time").value);

    var si = computeSI(p, r, t);

    document.getElementById("result").innerHTML = "Simple Interest: " + si;
}

function computeSI(p, r, t) {
    return (p * r * t) / 100;
}
