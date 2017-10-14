/**
 * Created by s1ckn3zz on 13.10.17.
 */
document.addEventListener("DOMContentLoaded", function() {
    generateField(2,2);
});



var generateField = function(x,y){
    var mainField = document.getElementById('gameField');
    deleteGameField();

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

var deleteGameField = function(){
  var mainField = document.getElementById('gameField');
  while (mainField.firstChild) {
    mainField.removeChild(mainField.firstChild);
  }

}
