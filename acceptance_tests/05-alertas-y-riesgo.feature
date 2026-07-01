Feature: EP03 Alertas y Riesgo
  Relacionado con las historias US16, US17, US18, US19, US20 y US21.

  Scenario: US16 Registro de pensamientos de riesgo suicida con nivel de intensidad
    Given el paciente abre "Registro de crisis"
    When marca "pensamientos de suicidio" y selecciona intensidad (idea, plan, intento)
    Then el sistema guarda el registro
    And marca el nivel de riesgo correspondiente

  Scenario: US17 Alerta inmediata al terapeuta por riesgo suicida
    Given un paciente guarda un registro con riesgo suicida
    When el sistema procesa ese evento
    Then envía una notificación push al terapeuta
    And la notificación incluye el nombre del paciente, nivel de riesgo, fecha y hora

  Scenario: US18 Alerta por empeoramiento sostenido de ánimo
    Given el sistema analiza los registros de ánimo del paciente
    When detecta al menos 3 días consecutivos con ánimo por debajo del umbral configurado
    Then genera una alerta visible en el panel del especialista

  Scenario: US19 Episodio de pánico registrado con síntomas y pensamientos
    Given el paciente abre "Ataque de pánico"
    When selecciona síntomas (p. ej. latidos acelerados, sensación de muerte) y escribe una descripción y guarda
    Then el sistema registra el episodio con fecha, duración y síntomas seleccionados

  Scenario: US20 Notificación al terapeuta por ataque de pánico
    Given el paciente guarda un registro de ataque de pánico
    When el sistema procesa el evento
    Then envía una notificación al terapeuta con el resumen del episodio

  Scenario: US21 Umbrales de alerta configurados para un paciente
    Given el terapeuta abre "Configuración de alertas" de un paciente
    When activa o desactiva tipos de alerta y ajusta los umbrales
    Then el sistema guarda esos parámetros
    And los usa en la detección futura de alertas
