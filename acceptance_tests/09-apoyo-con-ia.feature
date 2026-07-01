Feature: EP07 Apoyo con IA
  Relacionado con las historias US37, US38, US39, US40 y US41.

  Scenario: US37 Respuesta del chat de IA en menos de 5 segundos
    Given el paciente abre "Chat de apoyo"
    When envía un mensaje de texto
    Then recibe una respuesta en menos de 5 segundos
    And la respuesta hace referencia al contenido de su mensaje

  Scenario: US37 Chat disponible 24/7
    Given el paciente abre "Chat de apoyo" en cualquier horario
    When envía un mensaje
    Then recibe una respuesta sin importar la hora

  Scenario: US38 Respuesta de la IA personalizada al contenido del mensaje
    Given el paciente envía un mensaje describiendo una situación específica
    When la IA responde
    Then la respuesta hace referencia explícita a al menos un elemento del mensaje del paciente
    And no usa frases genéricas predefinidas de forma aislada como única respuesta

  Scenario: US39 Resumen de temas de conversación con la IA seleccionables para compartir
    Given el paciente ha usado el chat de IA
    When abre "Resumen de conversaciones"
    Then ve una lista de temas principales con fecha
    And puede elegir cuáles compartir con su terapeuta

  Scenario: US40 Sugerencias de IA sobre tendencias clínicas sin emitir diagnósticos
    Given existen al menos 7 días de registros del paciente
    When el terapeuta abre "Análisis de IA"
    Then el sistema muestra observaciones sobre tendencias emocionales
    And aclara que son sugerencias de apoyo y no diagnósticos

  Scenario: US41 Recorrido guiado con pasos sencillos y ejemplos clínicos
    Given el terapeuta abre "Modo guía"
    When inicia el recorrido
    Then la app muestra pasos sencillos con ejemplos clínicos
    And permite repetir el tutorial cuando lo necesite
