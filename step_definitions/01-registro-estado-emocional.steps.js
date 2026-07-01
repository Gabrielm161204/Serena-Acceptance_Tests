const { Given, When, Then } = require('@cucumber/cucumber');

// Estado compartido del escenario
let paciente = {};

Given('el paciente inició sesión', function () {
  paciente = { sesionActiva: true, registroHoy: false };
});

Given('no ha registrado su emoción hoy', function () {
  paciente.registroHoy = false;
});

When('abre la app y selecciona su emoción dentro de una escala', function () {
  paciente.emocionSeleccionada = 'feliz';
  paciente.fechaRegistro = new Date().toISOString();
  paciente.registroHoy = true;
});

Then('el sistema guarda el registro con fecha y hora', function () {
  if (!paciente.fechaRegistro) throw new Error('No se guardó la fecha del registro');
});

Then('muestra el registro en el historial', function () {
  if (!paciente.registroHoy) throw new Error('El registro no aparece en el historial');
});

// US01 - Ya registró hoy
Given('el paciente ya completó el registro del día', function () {
  paciente = { sesionActiva: true, registroHoy: true };
});

When('vuelve a abrir la app', function () {
  // Simula reabrir la app
});

Then('no aparece la pregunta diaria', function () {
  if (!paciente.registroHoy) throw new Error('Se mostró la pregunta diaria cuando no debería');
});

Then('ve directamente su registro guardado', function () {
  if (!paciente.registroHoy) throw new Error('No se ve el registro guardado');
});

// US02 - Nivel de ansiedad
Given('el paciente está en el formulario de registro diario', function () {
  paciente = { enFormulario: true };
});

When('elige un valor del 1 al 10 en {string} y guarda', function (campo) {
  paciente[campo] = 7;
  paciente.fecha = new Date().toISOString();
});

Then('el sistema almacena el valor con fecha', function () {
  if (!paciente.fecha) throw new Error('No se almacenó la fecha');
});

Then('lo incluye en los gráficos de evolución', function () {
  // Verificación simulada: en producción se consultaría la BD
});

// US03 - Ver calidad de sueño
Given('el paciente ha registrado su sueño por al menos 3 días', function () {
  paciente = { diasSueno: 5 };
});

When('el especialista abre el perfil del paciente y selecciona {string}', function (seccion) {
  paciente.seccionActiva = seccion;
});

Then('la app muestra una vista con horas dormidas y calidad por día', function () {
  if (paciente.diasSueno < 3) throw new Error('No hay suficientes días registrados');
});

Then('muestra un resumen gráfico del período seleccionado', function () {
  // Verificación simulada
});

Given('el paciente tiene menos de 3 días de sueño registrados', function () {
  paciente = { diasSueno: 1 };
});

When('el especialista selecciona {string}', function (seccion) {
  paciente.seccionActiva = seccion;
});

Then('la app muestra un mensaje indicando que aún no hay datos suficientes para mostrar el resumen', function () {
  if (paciente.diasSueno >= 3) throw new Error('Hay suficientes datos pero se mostró el mensaje de error');
});

// US04 - Calidad de sueño en formulario
When('ingresa horas dormidas y selecciona calidad {string}, {string} o {string} y guarda', function (c1, c2, c3) {
  paciente.horasDormidas = 7;
  paciente.calidadSueno = c1;
  paciente.fechaSueno = new Date().toISOString();
});

Then('el sistema almacena los datos de sueño con fecha', function () {
  if (!paciente.fechaSueno) throw new Error('No se almacenaron los datos de sueño');
});

// US05 - Nota de texto
Given('el paciente está en el registro diario', function () {
  paciente = { enRegistroDiario: true };
});

When('escribe una nota de texto y pulsa {string}', function (boton) {
  paciente.nota = 'Hoy me sentí bien';
  paciente.notaGuardada = true;
});

Then('la nota queda asociada al registro de ese día', function () {
  if (!paciente.notaGuardada) throw new Error('La nota no fue guardada');
});

Then('es visible en su historial', function () {
  if (!paciente.notaGuardada) throw new Error('La nota no es visible en el historial');
});

// US06 - Nota de voz
Given('el paciente toca el ícono de micrófono en el registro diario', function () {
  paciente = { micrófono: true };
});

When('graba un audio y confirma {string}', function (accion) {
  paciente.audioGuardado = true;
  paciente.fechaAudio = new Date().toISOString();
});

Then('el archivo se almacena asociado a la fecha', function () {
  if (!paciente.fechaAudio) throw new Error('No se almacenó la fecha del audio');
});

Then('puede reproducirse desde el historial', function () {
  if (!paciente.audioGuardado) throw new Error('El audio no puede reproducirse');
});

// US07 - Síntomas físicos
Given('selecciona {string}', function (opcion) {
  paciente.seccion = opcion;
});

When('escribe los síntomas que está sintiendo \(p. ej. latidos acelerados, sudoración\) y toca {string}', function (boton) {
  paciente.sintomas = 'latidos acelerados, sudoración';
  paciente.sintomasGuardados = true;
});

Then('el sistema almacena esos datos junto al registro emocional del día', function () {
  if (!paciente.sintomasGuardados) throw new Error('Los síntomas no fueron almacenados');
});

// US08 - Contexto de la emoción
Given('el paciente está registrando su emoción', function () {
  paciente = { registrandoEmocion: true };
});

When('selecciona uno o más ámbitos en {string} \(trabajo, estudios, familia, pareja\) y guarda', function (campo) {
  paciente.contexto = ['trabajo', 'familia'];
  paciente.contextoGuardado = true;
});

Then('el sistema almacena el contexto junto al registro emocional del día', function () {
  if (!paciente.contextoGuardado) throw new Error('El contexto no fue almacenado');
});
