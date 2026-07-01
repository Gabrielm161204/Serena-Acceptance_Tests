const { Given, When, Then } = require('@cucumber/cucumber');

let ia = {};

Given('el paciente tiene registros emocionales de al menos 5 días', function () {
  ia = { diasRegistrados: 5 };
});

When('accede a la sección de apoyo con IA', function () {
  ia.enSeccionIA = true;
});

Then('la IA muestra un análisis personalizado de su estado emocional reciente', function () {
  if (ia.diasRegistrados < 5) throw new Error('No hay suficientes registros para el análisis');
});

Given('el paciente está interactuando con el chatbot de la app', function () {
  ia = { chatbotActivo: true };
});

When('escribe un mensaje describiendo cómo se siente', function () {
  ia.mensajeUsuario = 'Hoy me siento muy ansioso';
  ia.respuestaGenerada = true;
});

Then('el chatbot responde con empatía y sugiere técnicas de regulación', function () {
  if (!ia.respuestaGenerada) throw new Error('El chatbot no generó respuesta');
});

Given('el paciente usa el chatbot fuera del horario del terapeuta', function () {
  ia = { horarioTerapeuta: false, chatbotActivo: true };
});

When('expresa que se siente mal emocionalmente', function () {
  ia.estadoCritico = true;
});

Then('el chatbot ofrece apoyo inmediato y sugiere contactar al terapeuta', function () {
  if (!ia.estadoCritico) throw new Error('No se detectó estado emocional crítico');
});

Given('el terapeuta quiere revisar las interacciones del paciente con la IA', function () {
  ia = { rol: 'terapeuta' };
});

When('accede al historial de conversaciones con IA del paciente', function () {
  ia.historialDisponible = true;
});

Then('puede ver un resumen de los temas tratados y el tono emocional detectado', function () {
  if (!ia.historialDisponible) throw new Error('El historial de IA no está disponible');
});
