/**
 * Created by s1ckn3zz on 13.10.17.
 */
document.addEventListener("DOMContentLoaded", function() {
    generateField(2,2);
});



var generateField = function(x,y){
    var mainField = document.getElementById('gameField');
    deleteGameField();

    for(var row = 0; row<x; row++){
        var rowField = document.createElement('div');
        rowField.id = 'row'+row;
        rowField.className = 'row';
        for(var column= 0; column<y; column++){
            var singleGameField = document.createElement('div');
            singleGameField.id = 'row'+row+'field'+column;
            singleGameField.className = 'gameField whiteField';
            rowField.appendChild(singleGameField);
        }
        mainField.appendChild(rowField);
    }
};

var deleteGameField = function(){
  var mainField = document.getElementById('gameField');
  while (mainField.firstChild) {
    mainField.removeChild(mainField.firstChild);
  }

}
