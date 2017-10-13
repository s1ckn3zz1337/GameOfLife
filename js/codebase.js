/**
 * Created by s1ckn3zz on 13.10.17.
 */
document.addEventListener("DOMContentLoaded", function() {
    generateField(2,2);
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

var generateField = function(x,y){
    var mainField = document.getElementById('gameField');
    for(var i = 0; i<x; i++){
        var rowField = document.createElement('div');
        rowField.id = 'row'+i;
        rowField.className = 'row';
        for(var j= 0; j<y; j++){
            var singleGameField = document.createElement('div');
            singleGameField.id = 'row'+i+'field'+j;
            singleGameField.className = 'gameField whiteField';
            rowField.appendChild(singleGameField);
        }
        mainField.appendChild(rowField);
    }
};