function calcola() {
    var cmb = document.getElementById("gender");
    var gender = cmb.options[cmb.selectedIndex].value;
    var height = document.getElementById("txt_altezza").value;
    var years = document.getElementById("txt_eta").value;
    var weight = document.getElementById("txt_peso").value;

    var bmi = (weight / (height * height)) * 10000;
    document.getElementById("lbl_bmi").innerHTML = bmi;

    var lorenz;
    if (gender == 0) {
        lorenz = height - 100 - (height - 150) / 4;

    }
    else {
        lorenz = height - 100 - (height - 150) / 2;
    }
    document.getElementById("lbl_lorenz").innerHTML = lorenz;

    var broca;
    if (gender == 0) {
        broca = height - 100;
    }
    else {
        broca = height - 104;
    }
    document.getElementById("lbl_broca").innerHTML=broca;

    var wandervael;
    if(gender==0)
    {
        wandervael=(height-150)*0.75 + 50;
    }
    else
    {
        wandervael=(height-150)*0.6 + 50;
    }
    document.getElementById("lbl_wandervael").innerHTML=wandervael;
    
    //BMI(gender, height, years, weight);   
    //fLorenz(gener,height,years,weight);
    //fBroca(gender,height,years,weight);
   // fWanDerVael(gender,height,years,weight);
}
function fLorenz(g, e, y, w) {
    var p;
    if (g == 0) {
        p = e - 100 - (e - 150) / 4;

    }
    else {
        p = e - 100 - (e - 150) / 2;
    }
    document.getElementById("lbl_lorenz").innerHTML = p;

}
function fBroca(g, e, y, w) {

    var p;
    if (g == 0) {
        p = e - 100;
    }
    else {
        p = e - 104;
    }
    document.getElementById("lbl_broca").innerHTML=p;
}
function fWanDerVael(g, e, y, w) {
    var p;
    if(g==0)
    {
        p=(e-150)*0.75 + 50;
    }
    else
    {
        p=(e-150)*0.6 + 50;
    }
    document.getElementById("lbl_wandervael").innerHTML=p;
}
function BMI(g, e, y, w) {
    var bmi = (w / (e * e)) * 10000;
    document.getElementById("lbl_bmi").innerHTML = bmi;   
}