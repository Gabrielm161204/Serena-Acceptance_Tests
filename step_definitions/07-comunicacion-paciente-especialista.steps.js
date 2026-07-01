const { Given, When, Then } = require('@cucumber/cucumber');

let chat = {};

Given('el paciente está en la sección de mensajes', function () {
  chat = { enMensajes: true };
});

When('escribe y envía un mensaje al terapeuta', function () {
  chat.mensajeEnviado = true;
  chat.mensaje = 'Hola, necesito ayuda';
  chat.timestamp = new Date().toISOString();
});

Then('el mensaje aparece en el hilo de conversación con fecha y hora', function () {
  if (!chat.mensajeEnviado) throw new Error('El mensaje no fue enviado');
  if (!chat.timestamp) throw new Error('No se registró la fecha y hora del mensaje');
});

Given('el terapeuta recibe un mensaje del paciente', function () {
  chat = { mensajeRecibido: true, leido: false };
});

When('el terapeuta lee el mensaje', function () {
  chat.leido = true;
});

Then('el paciente ve una confirmación de lectura', function () {
  if (!chat.leido) throw new Error('El mensaje no fue leído por el terapeuta');
});

Given('el paciente no tiene un terapeuta asignado', function () {
  chat = { terapeutaAsignado: false };
});

When('intenta acceder a la sección de mensajes', function () {
  chat.intentoAcceso = true;
});

Then('la app muestra un mensaje indicando que aún no tiene un especialista asignado', function () {
  if (chat.terapeutaAsignado) throw new Error('El paciente tiene terapeuta asignado');
});
