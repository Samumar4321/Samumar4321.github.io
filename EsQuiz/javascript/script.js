var cognome;
var nome;
var giorno;
var mese;
var anno;
var score = -1;
function elabora() {
    cognome = document.getElementById("txt_cognome").value.toString().toUpperCase();
    nome = document.getElementById("txt_nome").value.toString().toUpperCase();    
    giorno = document.getElementById("txt_giorno").value;
    var cmbMese=document.getElementById("cmb_mese");
    mese = cmbMese.options[cmbMese.selectedIndex].text;
    anno = document.getElementById("txt_anno").value;
    score = 0;
    var i = 0;
    alert(cognome + nome + giorno + mese + anno);
    if (cognome == "" || nome == "" || giorno == "" || mese == "" || anno == "") {
        alert("Controlla se hai inserito correttamente i dati anagrafici.");
    }
    else {

        var risposte = ["PHP", "2", "1 byte"];

        var risposta1 = document.getElementById("txt_d1").value;
        if (risposta1.toString() == risposte[i]) {
            score++;
        }
        i++;

        var risposta2 = document.getElementById("cmb_d2").value;
        if (risposta2.toString() == risposte[i]) {
            score++;
        }
        i++;

        if (document.getElementsByName("d3")[1].checked) {
            score++;
        }

        if (document.getElementsByName("d4")[0].checked && document.getElementsByName("d4")[2].checked) {
            score++;
        }

        var risposta5 = document.getElementById("txt_d5").value;
        if (risposta5.toString() == risposte[i]) {
            score++;
        }
        document.getElementById("punteggio").innerHTML = "Punteggio: " + score;
    }

}

function getCodice() {
    if (score == -1) {
        alert("compilare il modulo prima");
    }
    else {
        var score2 = score*10;
        var codice = cognome.slice(0, 3) + nome.slice(0, 3) + mese.slice(0, 3) + anno.slice(2, 4) + score2.toString();
        document.getElementById("txt_codice").value = codice;
    }
}