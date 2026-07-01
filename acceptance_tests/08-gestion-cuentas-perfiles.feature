Feature: EP06 Gestión de Cuentas y Perfiles
  Relacionado con las historias US32, US33, US34, US35 y US36.

  Scenario: US32 Creación de cuenta de paciente y redirección al onboarding
    Given el usuario abre "Crear cuenta paciente"
    When ingresa sus datos básicos y una contraseña válida y acepta los términos
    Then el sistema crea la cuenta
    And lo dirige al onboarding inicial

  Scenario: US32 Intento de registro con contraseña insegura
    Given el usuario llena el formulario de creación de cuenta
    When ingresa una contraseña que no cumple los requisitos mínimos
    Then el sistema muestra un mensaje indicando qué requisito falta
    And no permite continuar

  Scenario: US33 Creación de cuenta de terapeuta marcada como profesional de salud
    Given el usuario abre "Crear cuenta terapeuta"
    When llena sus datos y adjunta o declara su credencial profesional y envía
    Then la cuenta se crea
    And queda marcada como "profesional de salud"

  Scenario: US34 Vinculación del paciente con su terapeuta mediante solicitud aceptada
    Given el paciente abre "Vincular terapeuta"
    When ingresa el código o correo del terapeuta y confirma
    Then el sistema envía una solicitud al terapeuta
    And al ser aceptada ambos quedan vinculados

  Scenario: US34 Código de terapeuta no encontrado
    Given el paciente ingresa un código que no corresponde a ningún terapeuta registrado
    When confirma la solicitud
    Then el sistema muestra un mensaje de error
    And no realiza la vinculación

  Scenario: US35 Datos contextuales del paciente guardados en su expediente clínico
    Given el terapeuta abre el perfil de un paciente
    When completa campos como edad, con quién vive, motivo de consulta y medicación y guarda
    Then esos datos quedan disponibles en el expediente clínico del paciente

  Scenario: US36 Indicadores del paciente actualizados según la configuración del terapeuta
    Given el terapeuta abre "Indicadores del paciente"
    When activa o desactiva opciones (ánimo, sueño, ansiedad, etc.) y guarda
    Then el formulario de registro del paciente se actualiza con esos campos
