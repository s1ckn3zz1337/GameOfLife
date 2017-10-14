/**
 * Created by s1ckn3zz on 14.10.17.
 */
document.getElementById("xSize").addEventListener("input", function () {
    var x = document.getElementById("xSize");
    if(!isInt(x.value) && x.value !=""){
        x.value = 1;
    }else{
        if(x.value<1 && x.value != ""){
            x.value = 1;
        }
    }
});
document.getElementById("ySize").addEventListener("input", function () {
    var y = document.getElementById("ySize");
    if(!isInt(y.value) && y.value != ""){
        y.value = 1;
    }else{
        if(y.value< 1 && y.value != ""){
            y.value = 1;
        }
    }
});
document.getElementById("generate").addEventListener("click", function(){
    //generiere Matrix
    var x = document.getElementById("xSize").value;
    var y = document.getElementById("ySize").value;
    if(!isInt(x) || !isInt(y)){
        alert("Mach mal gescheite Eingaben!!!!");
    }
    //alert("Matrix wird generiert mit " + x + " und " + y);
    localStorage.setItem("x", x);
    localStorage.setItem("y", y);


    generateField(x, y);
});


document.getElementById("reset").addEventListener("click", function(){
    //leere Feld
    resetFields();
});

document.getElementById("random").addEventListener("click", function(){
    randomizeField();
});

document.getElementById("buttonStep").addEventListener("click", function(){
    //start/stop
    iterateOverField(document.getElementById("gameField"),checkField);
    alert("Einzelner Schritt wird ausgeführt");
});

document.getElementById("buttonSave").addEventListener("click", function(){
    //start/stop
    alert("Matrix wird gespeichert");
    saveMatrix();
});

document.getElementById("buttonLoad").addEventListener("change", function(event){
    handleFile(event);
    event.target.value = "";
    //generateFieldFromJson(feld);
});
