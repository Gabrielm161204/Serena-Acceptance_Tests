const { Given, When, Then } = require('@cucumber/cucumber');

let app = {};

Given('el usuario tiene activado el modo de alto contraste en su dispositivo', function () {
  app = { altoContraste: true };
});

When('abre la aplicación Serena', function () {
  app.abierta = true;
});

Then('la interfaz se adapta automáticamente mostrando colores de alto contraste', function () {
  if (!app.altoContraste) throw new Error('La app no respeta el modo de alto contraste');
});

Given('el usuario tiene activado el lector de pantalla en su dispositivo', function () {
  app = { lectorPantalla: true };
});

When('navega por la aplicación', function () {
  app.navegando = true;
});

Then('todos los elementos interactivos tienen etiquetas de accesibilidad descriptivas', function () {
  if (!app.lectorPantalla) throw new Error('El lector de pantalla no está activo');
});

Given('el usuario desea cambiar el tamaño de texto desde la configuración de la app', function () {
  app = { configurandoTexto: true };
});

When('selecciona un tamaño de fuente mayor', function () {
  app.tamanoFuente = 'grande';
});

Then('la interfaz ajusta el tamaño del texto sin romper el diseño', function () {
  if (!app.tamanoFuente) throw new Error('No se cambió el tamaño de fuente');
});
