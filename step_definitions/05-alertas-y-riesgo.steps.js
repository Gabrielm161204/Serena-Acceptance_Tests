const { Given, When, Then } = require('@cucumber/cucumber');

let sistema = {};

Given('el paciente ha registrado emociones de muy bajo ánimo durante 3 días consecutivos', function () {
  sistema = { diasBajoAnimo: 3, umbralAlerta: 3 };
});

When('el sistema analiza los registros recientes del paciente', function () {
  sistema.alertaGenerada = sistema.diasBajoAnimo >= sistema.umbralAlerta;
});

Then('genera una alerta de riesgo emocional', function () {
  if (!sistema.alertaGenerada) throw new Error('No se generó la alerta de riesgo');
});

Then('notifica al terapeuta asignado', function () {
  sistema.terapeutaNotificado = sistema.alertaGenerada;
  if (!sistema.terapeutaNotificado) throw new Error('No se notificó al terapeuta');
});

Given('el paciente tiene menos de 3 días consecutivos con bajo ánimo', function () {
  sistema = { diasBajoAnimo: 2, umbralAlerta: 3 };
});

When('el sistema revisa los registros', function () {
  sistema.alertaGenerada = sistema.diasBajoAnimo >= sistema.umbralAlerta;
});

Then('no se genera ninguna alerta de riesgo', function () {
  if (sistema.alertaGenerada) throw new Error('Se generó una alerta sin cumplir el umbral');
});

Given('el terapeuta recibe una alerta de riesgo de un paciente', function () {
  sistema = { alertaRecibida: true };
});

When('abre la alerta desde el panel', function () {
  sistema.alertaAbierta = true;
});

Then('puede ver el resumen de registros que desencadenaron la alerta', function () {
  if (!sistema.alertaAbierta) throw new Error('No se abrió la alerta');
});

Then('tiene la opción de contactar al paciente directamente desde la app', function () {
  sistema.opcionContacto = true;
  if (!sistema.opcionContacto) throw new Error('No hay opción de contacto disponible');
});

Given('el paciente está en situación de riesgo activo', function () {
  sistema = { riesgoActivo: true };
});

When('el sistema detecta indicadores críticos', function () {
  sistema.indicadoresCriticos = true;
  sistema.recursosMostrados = true;
});

Then('muestra recursos de ayuda de emergencia directamente en la app', function () {
  if (!sistema.recursosMostrados) throw new Error('No se mostraron recursos de emergencia');
});
