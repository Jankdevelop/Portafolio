function abrirTicket() {
  // Abrir la ventana del ticket
  let ticketVentana = window.open("", "ticket", "width=600,height=600");

  // Agregar contenido HTML a la ventana del ticket
  ticketVentana.document.write("<html><head><title>Ticket</title></head><body>");

  // Imprimir los datos del usuario en la ventana del ticket
  ticketVentana.document.write("<h1>Datos del Usuario:</h1>");
  ticketVentana.document.write("<p>Nombre: " + usuario.nombre + "</p>");
  ticketVentana.document.write("<p>Correo electrónico: " + usuario.correo + "</p>");

  // Imprimir los boletos generados en la ventana del ticket
  ticketVentana.document.write("<h1>Boletos Generados:</h1>");
  let subtotal = 0;
  for (let i = 0; i < boletos.length; i++) {
    let boleto = boletos[i];
    let costoBoleto = boleto.costoBoleto;
    let cantidad = boleto.cantidad;
    let costoViaje = boleto.costoViaje;
    let tipoAsiento = boleto.tipoAsiento;
    let destino = boleto.destino;
    let fechaHora = boleto= boleto.fecha;
    let hora = boleto.hora;
    // Calcular el subtotal del boleto
let subtotalBoleto = costoBoleto * cantidad;
subtotal += subtotalBoleto;

// Imprimir los datos del boleto en la ventana del ticket
ticketVentana.document.write("<h2>Boleto " + (i+1) + "</h2>");
ticketVentana.document.write("<p>Tipo de asiento: " + tipoAsiento + "</p>");
ticketVentana.document.write("<p>Destino: " + destino + "</p>");
ticketVentana.document.write("<p>Fecha: " + fecha + "</p>");
ticketVentana.document.write("<p>Hora: " + hora + "</p>");
ticketVentana.document.write("<p>Cantidad: " + cantidad + "</p>");
ticketVentana.document.write("<p>Costo por boleto: $" + costoBoleto.toFixed(2) + "</p>");
ticketVentana.document.write("<p>Subtotal: $" + subtotalBoleto.toFixed(2) + "</p>");

// Calcular el total
let impuesto = subtotal * 0.16;
let total = subtotal + impuesto;

// Imprimir el total en la ventana del ticket
ticketVentana.document.write("<h1>Total:</h1>");
ticketVentana.document.write("<p>Subtotal: $" + subtotal.toFixed(2) + "</p>");
ticketVentana.document.write("<p>Impuesto: $" + impuesto.toFixed(2) + "</p>");
ticketVentana.document.write("<p>Total: $" + total.toFixed(2) + "</p>");

// Cerrar el body y html de la ventana del ticket
ticketVentana.document.write("</body></html>");

// Imprimir la ventana del ticket
ticketVentana.print();
}
}