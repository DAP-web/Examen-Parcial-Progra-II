function addLine(){
    var date = document.forms["formulario"]["pdate"].value;
    var bebida = document.forms["formulario"]["pbebida"].value;
    var cantidad = document.forms["formulario"]["pcantidad"].value;

    var th1 = document.createElement("th");
    var th2 = document.createElement("th");
    var th3 = document.createElement("th");
    var th4 = document.createElement("th");
    var tr = document.createElement("tr");

    var message;
    if (cantidad < 8 ) {
        message = "tomar mas agua";
    } else {
        message = "meta alcanzada";
    }

    var dateText = document.createTextNode(date.toString());
    var bebidaText = document.createTextNode(bebida);
    var cantidadText = document.createTextNode(cantidad.toString());
    var messageText = document.createTextNode(message);
    
    th1.appendChild(dateText);
    th2.appendChild(bebidaText);
    th3.appendChild(cantidadText);
    th4.appendChild(messageText);
    
    if (date.toString() === "" || bebida === "" || cantidad.toString() === "") {
        alert("Debe escribir una tarea!");
    } else {

        tr.appendChild(th1);
        tr.appendChild(th2);
        tr.appendChild(th3);
        tr.appendChild(th4);
        
        document.getElementById("myTable").appendChild(tr);
    }

}

/* 
function newElement(){
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue===""){
        alert("debe escribir una tarea!");
    }else{
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value="";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00d7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    addCloseFunction();
}

*/