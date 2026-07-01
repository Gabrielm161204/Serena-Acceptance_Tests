const { Given, When, Then } = require('@cucumber/cucumber');

let usuario = {};

// Registro de nuevo usuario
Given('el usuario descarga la app por primera vez', function () {
  usuario = { primeroVez: true };
});

When('completa el formulario de registro con datos válidos', function () {
  usuario.nombre = 'María García';
  usuario.email = 'maria@email.com';
  usuario.password = 'Segura#123';
  usuario.registrado = true;
});

Then('la cuenta se crea exitosamente', function () {
  if (!usuario.registrado) throw new Error('La cuenta no fue creada');
});

Then('el usuario es redirigido al onboarding', function () {
  usuario.enOnboarding = true;
  if (!usuario.registrado) throw new Error('No se completó el registro');
});

// Inicio de sesión
Given('el usuario tiene una cuenta registrada', function () {
  usuario = { cuentaExistente: true, email: 'maria@email.com' };
});

When('ingresa sus credenciales correctas y pulsa {string}', function (boton) {
  usuario.sesionActiva = true;
});

Then('accede al dashboard principal de la app', function () {
  if (!usuario.sesionActiva) throw new Error('No se inició sesión correctamente');
});

// Credenciales incorrectas
Given('el usuario ingresa credenciales incorrectas', function () {
  usuario = { credencialesValidas: false };
});

When('pulsa {string}', function (boton) {
  usuario.intentoLogin = true;
});

Then('la app muestra un mensaje de error indicando credenciales incorrectas', function () {
  if (usuario.credencialesValidas) throw new Error('Se inició sesión con credenciales incorrectas');
});

// Editar perfil
Given('el usuario está en su perfil', function () {
  usuario = { enPerfil: true, nombre: 'María García' };
});

When('modifica su nombre o foto de perfil y guarda', function () {
  usuario.nombre = 'María G. Updated';
  usuario.perfilActualizado = true;
});

Then('los cambios se reflejan inmediatamente en la app', function () {
  if (!usuario.perfilActualizado) throw new Error('El perfil no fue actualizado');
});

// Cerrar sesión
Given('el usuario tiene una sesión activa', function () {
  usuario = { sesionActiva: true };
});

When('selecciona {string} en el menú', function (opcion) {
  usuario.sesionActiva = false;
});

Then('la sesión se cierra y es redirigido a la pantalla de inicio', function () {
  if (usuario.sesionActiva) throw new Error('La sesión sigue activa después de cerrar sesión');
});
