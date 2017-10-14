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
            singleGameField.setAttribute("xPosition",row);
            singleGameField.setAttribute("yPosition",column);
            singleGameField.addEventListener("click",singleFieldClick);

            rowField.appendChild(singleGameField);
        }
        mainField.appendChild(rowField);
    }
};

var singleFieldClick = function(){
  this.classList.toggle("selected");
}

var iterateOverField = function(mainField) {
  mainField.childNodes.forEach(function(currentRow){
    currentRow.childNodes.forEach(function(currentField) {
      console.log(currentField.getAttribute("xPosition"));
      console.log(currentField.getAttribute("yPosition"));
    });
  });
}

var resetFields = function() {
  var mainField = document.getElementById('gameField');
  mainField.childNodes.forEach(function(currentRow){
    currentRow.childNodes.forEach(function(currentField) {
      if(currentField.classList.contains("selected")){
        currentField.classList.toggle("selected");
      }
    });
  });
}

var saveMatrix = function() {
  var mainField = document.getElementById('gameField');

  var x = localStorage.getItem("x");
  var y = localStorage.getItem("y");

  var matrixJson = [];

  matrixJson.push({
    x: x,
    y: y
  });

  console.log(matrixJson);

  mainField.childNodes.forEach(function(currentRow){
    currentRow.childNodes.forEach(function(currentField) {
      if(currentField.classList.contains("selected")){
        currentField.classList.toggle("selected");
      }
    });
  });
}



var deleteGameField = function(){
  var mainField = document.getElementById('gameField');
  while (mainField.firstChild) {
    mainField.removeChild(mainField.firstChild);
  }

}
