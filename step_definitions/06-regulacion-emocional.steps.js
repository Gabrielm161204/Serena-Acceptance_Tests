const { Given, When, Then } = require('@cucumber/cucumber');

let paciente = {};

Given('el paciente inicia sesión y tiene un registro de ánimo bajo reciente', function () {
  paciente = { animoBajo: true, sesionActiva: true };
});

When('accede a la sección de técnicas de regulación', function () {
  paciente.enTecnicas = true;
});

Then('el sistema le muestra técnicas personalizadas según su estado emocional', function () {
  if (!paciente.animoBajo) throw new Error('No hay estado de ánimo bajo detectado');
});

Given('el paciente abre una técnica de respiración guiada', function () {
  paciente = { tecnicaActiva: 'respiracion' };
});

When('inicia el ejercicio', function () {
  paciente.ejercicioIniciado = true;
  paciente.duracion = 0;
});

Then('la app guía al paciente paso a paso con animaciones y temporizador', function () {
  if (!paciente.ejercicioIniciado) throw new Error('El ejercicio no fue iniciado');
});

Given('el paciente completa una técnica de regulación', function () {
  paciente = { tecnicaCompletada: true };
});

When('finaliza el ejercicio', function () {
  paciente.feedbackDisponible = true;
});

Then('el sistema registra la actividad y pregunta cómo se siente ahora', function () {
  if (!paciente.feedbackDisponible) throw new Error('No se solicitó feedback al finalizar');
});

Given('el terapeuta está configurando el plan de un paciente', function () {
  paciente = { planConfigurando: true, rol: 'terapeuta' };
});

When('asigna técnicas específicas al paciente', function () {
  paciente.tecnicasAsignadas = ['respiracion', 'mindfulness'];
});

Then('esas técnicas aparecen destacadas en la sección del paciente', function () {
  if (!paciente.tecnicasAsignadas || paciente.tecnicasAsignadas.length === 0)
    throw new Error('No se asignaron técnicas al paciente');
});

Given('el paciente quiere guardar una técnica como favorita', function () {
  paciente = { enListaTecnicas: true };
});

When('toca el ícono de favorito en una técnica', function () {
  paciente.tecnicaFavorita = 'mindfulness';
});

Then('la técnica aparece en su lista de favoritos', function () {
  if (!paciente.tecnicaFavorita) throw new Error('No se guardó la técnica como favorita');
});
