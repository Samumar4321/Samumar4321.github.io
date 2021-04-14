function calcolaPrezzo(form) {

    var radio1 = document.getElementById("r1");
    var costo;
    if (radio1.checked) {
        costo = 0.43;
    }
    else {
        costo = 0.20;
    }
    var nKm = document.getElementById("tkm").value;
    var fkm = parseFloat(nKm);
    var cmb=document.getElementById("n_people");    
    var nPersone=cmb.options[cmb.selectedIndex].value;
    var s = (fkm * costo)*nPersone;
    document.getElementById("prezzo").innerHTML = "Prezzo: " + s;

}