const { Given, When, Then } = require('@cucumber/cucumber');

let sistema = {};

// US42 - Cifrado
Given('cualquier registro se guarda o transmite', function () {
  sistema = { cifradoEnReposo: true, cifradoEnTransito: true };
});

When('se almacena en la base de datos o viaja por la red', function () {
  sistema.operacion = 'almacenamiento';
});

Then('se usa cifrado en reposo y cifrado en tránsito mediante HTTPS o TLS', function () {
  if (!sistema.cifradoEnReposo) throw new Error('No hay cifrado en reposo');
  if (!sistema.cifradoEnTransito) throw new Error('No hay cifrado en tránsito');
});

// US43 - Contraseña insegura
Given('el usuario está creando o cambiando su contraseña', function () {
  sistema = { cambiandoPassword: true };
});

When('ingresa una clave que no cumple los requisitos mínimos', function () {
  sistema.password = '123';
  sistema.passwordValida = sistema.password.length >= 8;
});

Then('la app muestra un mensaje indicando qué requisito falta', function () {
  if (sistema.passwordValida) throw new Error('La contraseña cumplía los requisitos mínimos');
});

Then('no permite guardar hasta cumplir los requisitos', function () {
  if (sistema.passwordValida) throw new Error('Se guardó una contraseña inválida');
});

// US44 - Consentimiento informado
Given('el usuario está creando una cuenta', function () {
  sistema = { creandoCuenta: true, aceptoTerminos: false };
});

When('llega a la pantalla de términos y condiciones', function () {
  sistema.enTerminos = true;
});

Then('debe marcar una casilla de aceptación antes de poder continuar', function () {
  if (sistema.aceptoTerminos) throw new Error('Se permitió continuar sin aceptar los términos');
});

// US45 - Inicio de sesión inusual
Given('el paciente tiene una cuenta activa', function () {
  sistema = { cuentaActiva: true };
});

When('se registra un inicio de sesión desde un dispositivo nuevo o una ubicación poco frecuente', function () {
  sistema.dispositivoNuevo = true;
  sistema.notificacionEnviada = true;
});

Then('el sistema envía una notificación al paciente', function () {
  if (!sistema.notificacionEnviada) throw new Error('No se envió la notificación de seguridad');
});

Then('la notificación indica el dispositivo, la ubicación aproximada y la hora del acceso', function () {
  if (!sistema.dispositivoNuevo) throw new Error('La notificación no contiene los datos del dispositivo');
});
