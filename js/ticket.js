let conceptos=JSON.parse(localStorage.getItem('ticket'));
let rs=JSON.parse(localStorage.getItem('rs'));
let rfc=JSON.parse(localStorage.getItem('rfc'));
let subt=JSON.parse(localStorage.getItem('s'));
let iv=JSON.parse(localStorage.getItem('i'));
let tota=JSON.parse(localStorage.getItem('t'));
(
    function(){
        let con='';
        for(var i=0; i<conceptos.length; i++){
            con+='<div class="divs"><label>Cantidad<div name="cantidad" id="cantidad">'+conceptos[i].cantidad+'</div></label>';
            con+='<label>Descripcion<div name="descripcion" id="descripcion">'+conceptos[i].descripcion+'</div></label>';
            con+='<label>Valor Unitario<div name="valorUnitario" id="valorUnitario">'+conceptos[i].valorUnitario+'</div></label>';
            con+='<label>Importe<div name="importe" id="importe">'+conceptos[i].importes+'</div></label></div>';
        }
        document.getElementById('conceptos').innerHTML=con;
        document.getElementById('rs').innerHTML=rs;
        document.getElementById('rfc').innerHTML=rfc;
        document.getElementById('subtotal').innerHTML=subt;
        document.getElementById('iva').innerHTML=iv;
        document.getElementById('total').innerHTML=tota;

        console.log(subt);
    }
)();

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