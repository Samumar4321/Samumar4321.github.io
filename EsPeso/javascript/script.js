function calculateWeight() {
    var eID = document.getElementById("materials");
    var materialPS = eID.options[eID.selectedIndex].value;
    var vol = document.getElementById("t1").value;
    var flaotVol = parseFloat(vol);
    var flaotPs = parseFloat(materialPS);
    var floatP = flaotVol * flaotPs;        
    document.getElementById("pesoSP").innerHTML = "Peso specifico: " + materialPS;
    document.getElementById("peso").innerHTML = "Peso: " + floatP;
}
function calcola() {
    var volume,psp,peso;
    volume = document.getElementById("t1").value;
  
}