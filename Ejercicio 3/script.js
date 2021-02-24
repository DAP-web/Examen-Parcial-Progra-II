function addLine(){
    var date = document.getElementById("pdate").value;
    var bebida = document.getElementById("pbebida").value;
    var cantidad = document.getElementById("pcantidad").value;

    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
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
    
    td1.appendChild(dateText);
    td2.appendChild(bebidaText);
    td3.appendChild(cantidadText);
    td4.appendChild(messageText);
    
    if (date.toString() === "" || bebida === "" || cantidad.toString() === "") {
        alert("Debe escribir una tarea!");
    } else {

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        
        document.getElementById("myTable").appendChild(tr);
    }

}
