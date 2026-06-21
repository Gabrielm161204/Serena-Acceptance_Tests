Feature: EP01 Registro de Estado Emocional .
  Relacionado con las historias US01, US02, US03 y US04.

  Scenario: US01 Registro y almacenamiento del estado emocional
    Given el paciente inició sesión
    And no ha registrado su emoción hoy
    When abre la app y selecciona su emoción dentro de una escala
    Then el sistema guarda el registro con fecha y hora
    And muestra el registro en el historial

  Scenario: US01 El paciente ya registró su emoción hoy
    Given el paciente ya completó el registro del día
    When vuelve a abrir la app
    Then no aparece la pregunta diaria
    And ve directamente su registro guardado

  Scenario: US02 Selección del nivel de ansiedad
    Given el paciente está en el formulario de registro diario
    When elige un valor del 1 al 10 en "Nivel de ansiedad" y guarda
    Then el sistema almacena el valor con fecha
    And lo incluye en los gráficos de evolución

  Scenario: US03 Ver calidad de sueño registrada por el paciente
    Given el paciente ha registrado su sueño por al menos 3 días
    When el especialista abre el perfil del paciente y selecciona "Sueño"
    Then la app muestra una vista con horas dormidas y calidad por día
    And muestra un resumen gráfico del período seleccionado

  Scenario: US03 Datos insuficientes para mostrar resumen
    Given el paciente tiene menos de 3 días de sueño registrados
    When el especialista selecciona "Sueño"
    Then la app muestra un mensaje indicando que aún no hay datos suficientes para mostrar el resumen

  Scenario: US04 Registro de calidad de sueño en el formulario diario
    Given el paciente está en el formulario de registro diario
    When ingresa horas dormidas y selecciona calidad "buena", "regular" o "mala" y guarda
    Then el sistema almacena los datos de sueño con fecha
