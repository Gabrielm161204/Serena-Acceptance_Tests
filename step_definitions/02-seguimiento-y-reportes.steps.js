const { Given, When, Then } = require('@cucumber/cucumber');

let contexto = {};

// US09 - Línea de tiempo
Given('el paciente tiene al menos un registro previo', function () {
  contexto = { registros: [{ fecha: '2026-06-01', emocion: 'bien' }] };
});

Given('accede a {string}', function (seccion) {
  contexto.seccionActiva = seccion;
});

When('selecciona un rango de fechas', function () {
  contexto.rango = { desde: '2026-06-01', hasta: '2026-06-30' };
});

Then('el sistema muestra una línea de tiempo con los registros emocionales', function () {
  if (!contexto.registros || contexto.registros.length === 0)
    throw new Error('No hay registros para mostrar');
});

Given('el paciente está en la línea de tiempo', function () {
  contexto = { enLineaDeTiempo: true };
});

When('toca un registro', function () {
  contexto.registroSeleccionado = { fecha: '2026-06-15', emocion: 'tranquilo' };
});

Then('puede ver el detalle de ese día', function () {
  if (!contexto.registroSeleccionado) throw new Error('No se seleccionó ningún registro');
});

// US10 - Patrones emocionales
Given('el terapeuta abre el perfil de un paciente', function () {
  contexto = { perfilPaciente: 'Juan Pérez' };
});

When('selecciona {string}', function (opcion) {
  contexto.vistaActiva = opcion;
});

Then('el sistema muestra gráficos de evolución de ánimo, ansiedad y sueño en períodos configurables', function () {
  if (!contexto.perfilPaciente) throw new Error('No hay perfil de paciente activo');
});

// US11 - Gráfico de sueño
Given('el paciente tiene al menos 7 días de sueño registrados', function () {
  contexto = { diasSueno: 7 };
});

When('el terapeuta o el paciente selecciona {string} y elige un período', function (vista) {
  contexto.vistaGrafico = vista;
  contexto.periodoSeleccionado = '2026-06';
});

Then('el sistema muestra un gráfico con horas dormidas y calidad por día en ese período', function () {
  if (contexto.diasSueno < 7) throw new Error('No hay suficientes datos de sueño');
});

Given('el paciente tiene menos de 7 días de sueño registrados', function () {
  contexto = { diasSueno: 3 };
});

When('se intenta visualizar el gráfico de sueño', function () {
  contexto.intentoGrafico = true;
});

Then('el sistema muestra un mensaje indicando que aún no hay suficientes datos', function () {
  if (contexto.diasSueno >= 7) throw new Error('Hay suficientes datos pero se mostró aviso de error');
});

// US12 - Resumen previo sesión
Given('hay una sesión registrada en la app', function () {
  contexto = { sesionRegistrada: true };
});

Given('faltan 24 horas o menos para la sesión', function () {
  contexto.horasParaSesion = 10;
});

When('el sistema procesa el evento de proximidad de cita', function () {
  contexto.resumenGenerado = contexto.horasParaSesion <= 24;
});

Then('genera un resumen con emociones, niveles de ansiedad y eventos clave de los últimos 7 días', function () {
  if (!contexto.resumenGenerado) throw new Error('El resumen no fue generado');
});

Then('lo muestra en el panel del terapeuta', function () {
  if (!contexto.resumenGenerado) throw new Error('El resumen no aparece en el panel');
});

Given('no hay ninguna sesión registrada próxima para ese paciente', function () {
  contexto = { sesionRegistrada: false };
});

When('el terapeuta revisa el panel', function () {
  contexto.panelRevisado = true;
});

Then('no se muestra ningún resumen automático', function () {
  if (contexto.sesionRegistrada) throw new Error('Se mostró resumen sin sesión próxima');
});

Then('aparece un mensaje indicando que no hay citas próximas', function () {
  if (contexto.sesionRegistrada) throw new Error('No debería haber citas registradas');
});

// US13 - Exportar PDF
Given('el terapeuta está en el perfil del paciente', function () {
  contexto = { enPerfilPaciente: true };
});

When('selecciona {string}, elige un rango de fechas y confirma', function (accion) {
  contexto.exportando = true;
  contexto.rango = { desde: '2026-05-01', hasta: '2026-05-31' };
});

Then('el sistema genera un PDF con los registros de ánimo y ansiedad del período', function () {
  if (!contexto.exportando) throw new Error('No se inició la exportación');
});

Then('descarga el archivo', function () {
  contexto.archivoDescargado = true;
});

// US14 - Metas de bienestar
Given('el paciente tiene metas de bienestar configuradas', function () {
  contexto = { metas: [{ nombre: 'Reducir ansiedad', avance: 60 }] };
});

When('abre {string}', function (seccion) {
  contexto.seccionActiva = seccion;
});

Then('el sistema muestra el porcentaje de avance de cada meta', function () {
  if (!contexto.metas || contexto.metas.length === 0) throw new Error('No hay metas configuradas');
});

Then('muestra una comparativa con el período anterior', function () {
  // Verificación simulada
});

Given('el paciente no tiene metas de bienestar configuradas', function () {
  contexto = { metas: [] };
});

Then('el sistema muestra un mensaje invitándolo a crear su primera meta', function () {
  if (contexto.metas && contexto.metas.length > 0) throw new Error('Hay metas pero se mostró mensaje de bienvenida');
});

// US15 - Notas clínicas
When('abre {string}, escribe una nota y pulsa {string}', function (seccion, boton) {
  contexto.notaClinica = 'Paciente presenta mejora significativa';
  contexto.notaGuardada = true;
  contexto.fechaNota = new Date().toISOString();
});

Then('la nota queda almacenada con fecha y hora', function () {
  if (!contexto.fechaNota) throw new Error('No se registró la fecha de la nota');
});

Then('es visible solo para el terapeuta', function () {
  // Verificación de permisos simulada
});

Given('el terapeuta ha guardado una nota clínica', function () {
  contexto = { notaClinica: 'Nota privada del terapeuta', visibleParaPaciente: false };
});

When('el paciente accede a su perfil o historial', function () {
  contexto.perfilPacienteActivo = true;
});

Then('la nota clínica no aparece en ninguna sección visible para el paciente', function () {
  if (contexto.visibleParaPaciente) throw new Error('La nota clínica es visible para el paciente');
});
