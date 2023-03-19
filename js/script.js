//variables objeto
var receptor={
    razonSocilal:"",
    rfc:"",
};

function generar(){
    console.log("entra a generar");
     receptor.razonSocilal=document.getElementById('rs').value;
     receptor.rfc=document.getElementById('rfc').value;

     document.getElementById('generar').addEventListener('click',function(){generarConceptos()});
}

//se identifica el numero de conceptos antes de agregar
let conceptos = document.getElementById('conceptos').innerHTML;

let generarConceptos=function(){
    console.log("entra a generarConceptos");
    let num=document.getElementById('n-conceptos').value;
    
    if(num>0){
        for(i=0; i<num; i++){
            conceptos+=estructuraConceptos(i);
        }

        document.getElementById('conceptos').innerHTML=conceptos;
        document.getElementById('agregar').classList.add("mostrar-agregar");
        document.getElementById('ticket').classList.add("mostrar-ticket");
        // Quitar la funcionalidad de conceptos
        document.getElementById('titulo-conceptos').classList.add("quitar-titulo-conceptos");
    }
}

let agregarConceptos = function(){

    let totalcantidad=document.getElementsByName('cantidad');

    conceptos += estructuraConceptos(totalcantidad.length);

    document.getElementById('conceptos').innerHTML = conceptos;
}

//funcion para dibujar las cajas de conceptos

function estructuraConceptos(num){

    return `<div>
    <label>Cantidad
    <input type="number" name="cantidad" id="c${num}" value="" onblur="calcularImporte(${num});"/></label>
    <label>Descripcion
    <input type="text" name="descripcion" id="descripcion" placeholder=" ADULTO O NIÑO"/></label>
    <label>Valor Unitario
    <input type="number" name="valorUnitario" id="v${num}" value="0.0" step="0.01" onblur="calcularImporte(${num});"/></label>
    <label>Importe
    <input type="number" name="importe" id="i${num}" value="" step="0.01" onblur="calcularImporte(${num});"/></label>
    </div>`;
}

var calcularImporte=function(x){
    document.getElementById('i'+x).value=document.getElementById('c'+x).value*document.getElementById('v'+x).value;

    totales();
}

let totales = function(){

    let total=document.getElementsByName('importe');
    let subtotal=0;

    for( var i=0;i<total.length; i++){
        subtotal+=parseFloat(total[i].value);
    }
    document.getElementById('subTotal').innerHTML=subtotal;
    document.getElementById('iva').innerHTML=subtotal*0.16;
    document.getElementById('total').innerHTML=subtotal+(subtotal*0.16);

    
    localStorage.setItem('s', JSON.stringify(subtotal));
    localStorage.setItem('i', JSON.stringify(subtotal*0.16));
    localStorage.setItem('t', JSON.stringify(subtotal+(subtotal*0.16)));
}

document.getElementById('ticket').addEventListener('click',function(){generarTicket()});

let generarTicket=function(){
    let cantidadAr=document.getElementsByName('cantidad');
    let descrip=document.getElementsByName('descripcion');
    let valorUni=document.getElementsByName('valorUnitario');
    let importe=document.getElementsByName('importe');

    let ticket=[];

    for(var i=0; i<descrip.length;i++){
        objCantidad=cantidadAr[i].value;
        objDescripcion=descrip[i].value;
        objValorUni=valorUni[i].value;
        objImporte=importe[i].value;

        ticket[i]={
            cantidad:objCantidad,
            descripcion: objDescripcion,
            valorUnitario: objValorUni,
            importes: objImporte,
        };
    }

    function generarTicket() {
    var razonSocial = document.getElementById("razonSocial").value;
    var rfc = document.getElementById("rfc").value;
    var conceptos = document.getElementById("conceptos").value;
    var subtotal = parseFloat(document.getElementById("subtotal").value);
    var iva = subtotal * 0.16;
    var total = subtotal + iva;
    var destino = document.getElementById("destino").value;
    var reservaNinos = document.getElementById("reservaNinos").checked;
    var ticket = "Razón Social: " + razonSocial + "\nRFC: " + rfc + "\nConceptos: " + conceptos + "\nSubtotal: $" + subtotal.toFixed(2) + "\nIVA: $" + iva.toFixed(2) + "\nTotal: $" + total.toFixed(2) + "\nDestino: " + destino + "\nReservación para niños: " + (reservaNinos ? "Sí" : "No");
    alert(ticket);
}
    // console.table(ticket);

    localStorage.setItem('ticket', JSON.stringify(ticket));
    localStorage.setItem('rs', JSON.stringify(receptor.razonSocilal));
    localStorage.setItem('rfc', JSON.stringify(receptor.rfc));
    console.table(JSON.stringify(receptor.razonSocilal));
    window.open("ticket.html", width="800", height="500");
}

document.getElementById('reservacion-menor').addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('reservacion-edad').style.display = 'block';
    } else {
        document.getElementById('reservacion-edad').style.display = 'none';
    }
});
