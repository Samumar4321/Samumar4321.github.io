function start_setup() {
    var genders = ["Maschio", "Femmina"];
    cmb_gender = document.getElementById("cmb_gender");
    for (var g = 0; g < genders.length; g++) {
        cmb_gender.add(new Option(genders[g]));
    }

    var colori = ["Neri", "Marroni", "Verdi", "Gialli", "Rossi", "Azzurri"];
    cmb_occhi = document.getElementById("cmb_colore_occhi");
    for (var c = 0; c < colori.length; c++) {
        cmb_occhi.add(new Option(colori[c]));
    }

    var province = ["Bergamo", "Brescia", "Como", "Cremona", "Lecco", "Lodi", "Mantova", "Milano", "Monza Brianza", "Pavia", "Sondrio", "Varese"];
    cmb_province = document.getElementById("cmb_provincia");
    for (var p = 0; p < province.length; p++) {
        cmb_province.add(new Option(province[p]));        
    }
}