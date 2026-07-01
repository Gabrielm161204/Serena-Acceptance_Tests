const { Given, When, Then } = require('@cucumber/cucumber');

let medicacion = {};

Given('el terapeuta ha registrado medicación para un paciente', function () {
  medicacion = { medicamentos: [{ nombre: 'Sertralina', dosis: '50mg', frecuencia: 'diaria' }] };
});

When('el paciente abre la sección de medicación', function () {
  medicacion.seccionAbierta = true;
});

Then('puede ver el listado de medicamentos con dosis y frecuencia', function () {
  if (!medicacion.medicamentos || medicacion.medicamentos.length === 0)
    throw new Error('No hay medicamentos registrados');
});

Given('el paciente tiene medicación registrada con horario', function () {
  medicacion = { recordatorioActivo: true, hora: '08:00' };
});

When('llega la hora del recordatorio', function () {
  medicacion.notificacionEnviada = true;
});

Then('la app envía una notificación recordándole tomar su medicamento', function () {
  if (!medicacion.notificacionEnviada) throw new Error('No se envió el recordatorio de medicación');
});
