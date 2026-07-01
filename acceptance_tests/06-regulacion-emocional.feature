Feature: EP04 Regulación Emocional
  Relacionado con las historias US22, US23, US24, US25, US26 y US27.

  Scenario: US22 Visualización de técnicas por categoría en la biblioteca
    Given el paciente abre "Técnicas de regulación"
    When elige una categoría (respiración, grounding, etc.)
    Then el sistema muestra una lista de técnicas con descripción y pasos

  Scenario: US23 Plan de emergencia con tips favoritos disponible en acceso rápido
    Given el paciente accede a "Plan de emergencia"
    When agrega, ordena o elimina tips y guarda
    Then la lista queda disponible en una pantalla de acceso rápido

  Scenario: US23 Acceso rápido al plan de emergencia desde la pantalla bloqueada
    Given el paciente ha activado el widget de emergencia
    When la pantalla está bloqueada
    Then puede abrir directamente el plan de emergencia con uno o dos toques

  Scenario: US24 Técnicas personalizadas visibles para el paciente
    Given el terapeuta abre el perfil del paciente
    When selecciona técnicas de la biblioteca o añade una propia y las marca como "recomendadas"
    Then esas técnicas aparecen destacadas en la app del paciente

  Scenario: US25 Recordatorio suave de técnica enviado a tiempo
    Given el paciente configura recordatorios en una técnica
    When llega la hora elegida
    Then el sistema envía una notificación discreta invitando a practicar
    And la frecuencia no supera la configurada

  Scenario: US25 No se envía notificación duplicada el mismo día
    Given el sistema ya envió un recordatorio para esa técnica hoy
    When llega la hora de un segundo recordatorio configurado
    Then no se envía una nueva notificación para ese día

  Scenario: US26 Uso de técnica registrada y visible para el terapeuta
    Given el paciente marca una técnica como "realizada"
    When el terapeuta abre "Uso de técnicas"
    Then ve un resumen del número de veces y las fechas en que el paciente la utilizó

  Scenario: US27 Visualizar la lista de momentos difíciles
    Given el paciente tiene al menos un evento de alto malestar registrado
    When abre "Revisar mis momentos difíciles"
    Then la app muestra una lista con los eventos ordenados por fecha

  Scenario: US27 Completar la revisión guiada de un momento difícil
    Given el paciente selecciona un evento de la lista de momentos difíciles
    When responde las preguntas guiadas (qué pasó antes, qué sentí, qué hice) y toca "Guardar"
    Then las respuestas quedan guardadas asociadas a ese evento
    And están disponibles para revisarlas con su terapeuta
