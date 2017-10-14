/**
 * Created by s1ckn3zz on 13.10.17.
 */
document.addEventListener("DOMContentLoaded", function() {
    localStorage.setItem("x", 2);
    localStorage.setItem("y", 2);
    generateField(2,2);
});
var textFile = null;
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


  var matrix = {};
  matrix.x = x;
  matrix.y = y;

  var field = [];
  mainField.childNodes.forEach(function(currentColumn){
    var row = [];
    currentColumn.childNodes.forEach(function(currentField) {

      if(currentField.classList.contains("selected")){
        row.push("true");
      }else{
        row.push("false");
      }
    });
    field.push(row);

  });
  matrix.field = field;
  downloadJson(matrix);

}

var downloadJson = function(json){
  textFile = makeTextFile(json);
  var link = document.createElement('a');
  link.setAttribute('download', 'saveGame.gof');
  link.href = textFile
  document.body.appendChild(link);

    // wait for the link to be added to the document

   window.requestAnimationFrame(function () {
      var event = new MouseEvent('click');
      link.dispatchEvent(event);
      document.body.removeChild(link);
    });
}

var makeTextFile = function (json) {
  var data = new Blob([JSON.stringify(json, null, 4)], {type: 'text/plain'});

  // If we are replacing a previously generated file we need to
  // manually revoke the object URL to avoid memory leaks.
  if (textFile !== null) {
    window.URL.revokeObjectURL(textFile);
  }

  textFile = window.URL.createObjectURL(data);

  // returns a URL you can use as a href
  return textFile;
};


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
        singleField.classList.toggle("selected", json.field[x][y]==="true");
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
