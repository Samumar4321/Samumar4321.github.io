function calculateWeight() {
    var eID = document.getElementById("materials");
    var materialPS = eID.options[eID.selectedIndex].value;
    var vol = document.getElementById("t1").value;
    var flaotVol = parseFloat(vol);
    var flaotPs = parseFloat(materialPS);
    var floatP = flaotVol * flaotPs;
    //var p = materialID*vol;         
    //document.write(vol);          
    document.getElementById("pesoSP").innerHTML = "Peso specifico: " + materialPS;
    document.getElementById("peso").innerHTML = "Peso: " + floatP;
}