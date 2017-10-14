/**
 * Created by s1ckn3zz on 13.10.17.
 */
document.addEventListener("DOMContentLoaded", function() {
    generateField(2,2);
});

var generateField = function(x,y){
    var mainField = document.getElementById('gameField');
    deleteGameField();

    for(var column = 0; column<x; column++){
        var columnField = document.createElement('div');
        columnField.id = 'column'+column;
        columnField.className = 'column';
        for(var row= 0; row<y; row++){
            var singleGameField = document.createElement('div');
            singleGameField.id = 'column'+column+'field'+row;
            singleGameField.className = 'gameField whiteField';
            singleGameField.setAttribute("xPosition",column);
            singleGameField.setAttribute("yPosition",row);
            singleGameField.addEventListener("click",singleFieldClick);
            columnField.appendChild(singleGameField);
        }
        mainField.appendChild(columnField);
    }
};

var singleFieldClick = function(){
  this.classList.toggle("selected");
};

var iterateOverField = function(mainField, singleFieldFunction) {
  mainField.childNodes.forEach(function(currentRow){
    currentRow.childNodes.forEach(function(currentField) {
        singleFieldFunction(currentField);
    });
  });
};

var resetFields = function() {
  var mainField = document.getElementById('gameField');

  mainField.childNodes.forEach(function(currentRow){
    currentRow.childNodes.forEach(function(currentField) {
      if(currentField.classList.contains("selected")){
        currentField.classList.toggle("selected");
      }
    });
  });
};

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

};

var randomizeField = function () {
    var mainField = document.getElementById('gameField');
    iterateOverField(mainField,function (singleField) {
        singleField.classList.toggle("selected", Math.random()>0.5);
    })
};


var generateFieldFromJson = function(json){
    var mainField = document.getElementById('gameField');
    generateField(json.x, json.y);
    iterateOverField(mainField,function (singleField) {
        var x = singleField.getAttribute("xPosition");
        var y = singleField.getAttribute("yPosition");
        singleField.classList.toggle("selected", json.field[x][y]);
    })
}

var handleFile = function(event){
    var file = event.target.files[0];
    var fr = new FileReader();
    fr.onload = function(readyEvent){
        generateFieldFromJson(JSON.parse(readyEvent.target.result));
    };
    fr.readAsText(file);
}

var feld = {
    "x" : 3,
    "y" : 3, "field": [
        [true, true, true],
        [false,true,false],
        [false,false,false]
    ]
};

