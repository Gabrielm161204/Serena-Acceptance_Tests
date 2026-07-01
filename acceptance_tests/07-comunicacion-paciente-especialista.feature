Feature: EP05 Comunicación Paciente–Especialista
  Relacionado con las historias US28, US29, US30 y US31.

  Scenario: US28 Envío exitoso de mensaje breve al terapeuta
    Given el paciente abre "Mensajes"
    When escribe un texto y pulsa "Enviar"
    Then el mensaje se guarda
    And el terapeuta recibe una notificación en su panel

  Scenario: US29 Notificación al terapeuta por registro emocional preocupante
    Given el sistema detecta un registro con ánimo muy bajo o ansiedad muy alta según la configuración
    When se guarda ese registro
    Then el sistema genera una notificación en el panel del terapeuta

  Scenario: US30 Tarea terapéutica creada y visible en la lista de actividades del paciente
    Given el terapeuta abre el perfil del paciente
    When crea una tarea con título, descripción y fecha sugerida y la guarda
    Then la tarea aparece en la lista de actividades del paciente

  Scenario: US31 Visualización del estado y fecha de cumplimiento de tareas del paciente
    Given el paciente marca tareas como "completadas"
    When el terapeuta abre "Tareas del paciente"
    Then ve el estado (pendiente / completada / no realizada) y las fechas de cumplimiento de cada tarea
