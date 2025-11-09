function celtofahr() {
    var cel = document.getElementById("celsius");
    var fahrvalue = (cel.value * 9 / 5 ) + 32;
    document.getElementById("fahr").value = fahrvalue;
}

function weightopounds() {
    document.getElementById("lb").value = document.getElementById("kil").value * 2.2;
}

function kmtomiles() {
    document.getElementById("mile").value = document.getElementById("km").value * 0.62137;
}
