/**
 * Created by s1ckn3zz on 14.10.17.
 */
document.getElementById("generate").addEventListener("click", function(){
    //generiere Matrix
    var x = document.getElementById("xSize").value;
    var y = document.getElementById("ySize").value;
    alert("Matrix wird generiert mit " + x + " und " + y);
    generateField(x, y);
});


document.getElementById("reset").addEventListener("click", function(){
    //leere Feld
    alert("Feld wird geleert");
});

document.getElementById("random").addEventListener("click", function(){
    //random Feld
    alert("Feld wird random gefüllt");
});

document.getElementById("start").addEventListener("click", function(){
    //start/stop
    alert("Spiel wird gestartet/gestoppt");
});