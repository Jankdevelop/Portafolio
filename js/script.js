// Arreglo para almacenar los boletos generados
let boletos = [];

// Función para generar el boleto de adulto
function generarBoletoAdulto() {
  let destino = document.getElementById("destino").value;
  let cantidadAdultos = document.getElementById("cantidadAdultos").value;
  let fechaHora = document.getElementById("fechaHora").value;
  let tipoAsiento = document.getElementById("tipoAsiento").value;
  let costoViaje = 100;
  let costoBoleto = 100;
  let total = costoViaje + costoBoleto;
  let boleto = {
    "destino": destino,
    "cantidad": cantidadAdultos,
    "fechaHora": fechaHora,
    "tipoAsiento": tipoAsiento,
    "costoViaje": costoViaje,
    "costoBoleto": costoBoleto,
    "total": total
  };
  boletos.push(boleto);
  let boletosGeneradosDiv = document.getElementById("boletosGenerados");
  let boletoDiv = document.createElement("div");
  let boletoInfo = document.createTextNode(`Destino: ${destino}, Cantidad: ${cantidadAdultos}, Fecha y Hora: ${fechaHora}, Tipo de Asiento: ${tipoAsiento}, Costo del Viaje: $${costoViaje}, Costo del Boleto: $${costoBoleto}, Total: $${total}`);
  boletoDiv.appendChild(boletoInfo);
  boletosGeneradosDiv.appendChild(boletoDiv);
}

// Función para generar el boleto de niño
function generarBoletoNino() {
  let destino = document.getElementById("destino").value;
  let cantidadNinos = document.getElementById("cantidadNinos").value;
  let fechaHora = document.getElementById("fechaHora").value;
  let tipoAsiento = document.getElementById("tipoAsiento").value;
  let costoViaje = 100;
  let costoBoleto = 50;
  let total = costoViaje + costoBoleto;
  let boleto = {
    "destino": destino,
    "cantidad": cantidadNinos,
    "fechaHora": fechaHora,
    "tipoAsiento": tipoAsiento,
    "costoViaje": costoViaje,
    "costoBoleto": costoBoleto,
    "total": total
  };
  boletos.push(boleto);
  let boletosGeneradosDiv = document.getElementById("boletosGenerados");
  let boletoDiv = document.createElement("div");
  let boletoInfo = document.createTextNode(`Destino: ${destino}, Cantidad: ${cantidadNinos}, Edad del Niño: (Ingresada por el usuario), Fecha y Hora: ${fechaHora}, Tipo de Asiento: ${tipoAsiento}`);
  boletoDiv.appendChild(boletoInfo);
  boletosGeneradosDiv.appendChild(boletoDiv);
  document.getElementById("cantidadNinos").value = 0;
  document.getElementById("fechaHora").value = "";
  document.getElementById("tipoAsiento").selectedIndex = 0;
  }

  function abrirTicket() {
    // Crear un objeto URL con la página "ticket.html"
    let url = new URL("ticket.html", window.location.href);

    // Agregar los parámetros de la compra al objeto URL
    for (let i = 0; i < boletos.length; i++) {
      let boleto = boletos[i];
      url.searchParams.append(`destino${i+1}`, boleto.destino);
      url.searchParams.append(`cantidad${i+1}`, boleto.cantidad);
      url.searchParams.append(`fechaHora${i+1}`, boleto.fechaHora);
      url.searchParams.append(`tipoAsiento${i+1}`, boleto.tipoAsiento);
      url.searchParams.append(`costoViaje${i+1}`, boleto.costoViaje);
      url.searchParams.append(`costoBoleto${i+1}`, boleto.costoBoleto);
      url.searchParams.append(`total${i+1}`, boleto.total);
    }

    // Abrir la página "ticket.html" en una nueva pestaña
    window.open(url.href, "_blank");}