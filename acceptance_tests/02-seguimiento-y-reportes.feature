Feature: EP02 Seguimiento y Reportes
  Relacionado con las historias US09, US10, US11, US12, US13, US14 y US15.

  Scenario: US09 Visualización de línea de tiempo emocional
    Given el paciente tiene al menos un registro previo
    And accede a "Historial"
    When selecciona un rango de fechas
    Then el sistema muestra una línea de tiempo con los registros emocionales

  Scenario: US09 Ver detalle de un día
    Given el paciente está en la línea de tiempo
    When toca un registro
    Then puede ver el detalle de ese día

  Scenario: US10 Visualización de patrones emocionales por paciente
    Given el terapeuta abre el perfil de un paciente
    When selecciona "Patrones emocionales"
    Then el sistema muestra gráficos de evolución de ánimo, ansiedad y sueño en períodos configurables

  Scenario: US11 Gráfico de calidad de sueño visualizado por período
    Given el paciente tiene al menos 7 días de sueño registrados
    When el terapeuta o el paciente selecciona "Gráfico de sueño" y elige un período
    Then el sistema muestra un gráfico con horas dormidas y calidad por día en ese período

  Scenario: US11 Datos insuficientes para el gráfico de sueño
    Given el paciente tiene menos de 7 días de sueño registrados
    When se intenta visualizar el gráfico de sueño
    Then el sistema muestra un mensaje indicando que aún no hay suficientes datos

  Scenario: US12 Resumen previo visible en panel del terapeuta
    Given hay una sesión registrada en la app
    And faltan 24 horas o menos para la sesión
    When el sistema procesa el evento de proximidad de cita
    Then genera un resumen con emociones, niveles de ansiedad y eventos clave de los últimos 7 días
    And lo muestra en el panel del terapeuta

  Scenario: US12 Sin citas próximas registradas
    Given no hay ninguna sesión registrada próxima para ese paciente
    When el terapeuta revisa el panel
    Then no se muestra ningún resumen automático
    And aparece un mensaje indicando que no hay citas próximas

  Scenario: US13 Generación de PDF de registros
    Given el terapeuta está en el perfil del paciente
    When selecciona "Exportar reporte", elige un rango de fechas y confirma
    Then el sistema genera un PDF con los registros de ánimo y ansiedad del período
    And descarga el archivo

  Scenario: US14 Visualización del progreso en metas de bienestar
    Given el paciente tiene metas de bienestar configuradas
    When abre "Mis metas"
    Then el sistema muestra el porcentaje de avance de cada meta
    And muestra una comparativa con el período anterior

  Scenario: US14 Sin metas configuradas
    Given el paciente no tiene metas de bienestar configuradas
    When abre "Mis metas"
    Then el sistema muestra un mensaje invitándolo a crear su primera meta

  Scenario: US15 Nota clínica creada y guardada por el terapeuta
    Given el terapeuta está en el perfil del paciente
    When abre "Notas clínicas", escribe una nota y pulsa "Guardar"
    Then la nota queda almacenada con fecha y hora
    And es visible solo para el terapeuta

  Scenario: US15 Nota clínica no visible para el paciente
    Given el terapeuta ha guardado una nota clínica
    When el paciente accede a su perfil o historial
    Then la nota clínica no aparece en ninguna sección visible para el paciente
