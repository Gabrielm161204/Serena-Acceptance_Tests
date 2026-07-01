Feature: EP10 Medicación
  Relacionado con la historia US50.

  Scenario: US50 Notificación de medicación enviada a tiempo
    Given el paciente configura un medicamento con nombre, dosis y horario
    When llega la hora programada
    Then la app envía una notificación indicando el nombre del medicamento y la dosis
    And la notificación se envía con un margen máximo de 1 minuto de retraso
