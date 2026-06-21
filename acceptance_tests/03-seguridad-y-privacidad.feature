Feature: EP08 Seguridad y Privacidad
  Relacionado con las historias no funcionales US42, US43, US44 y US45.

  Scenario: US42 Cifrado de datos sensibles en reposo y en tránsito
    Given cualquier registro se guarda o transmite
    When se almacena en la base de datos o viaja por la red
    Then se usa cifrado en reposo y cifrado en tránsito mediante HTTPS o TLS

  Scenario: US43 Bloqueo de contraseña insegura con mensaje de ayuda
    Given el usuario está creando o cambiando su contraseña
    When ingresa una clave que no cumple los requisitos mínimos
    Then la app muestra un mensaje indicando qué requisito falta
    And no permite guardar hasta cumplir los requisitos

  Scenario: US44 Aceptación obligatoria del consentimiento informado antes de continuar
    Given el usuario está creando una cuenta
    When llega a la pantalla de términos y condiciones
    Then debe marcar una casilla de aceptación antes de poder continuar

  Scenario: US45 Alerta por inicio de sesión desde dispositivo o ubicación inusual
    Given el paciente tiene una cuenta activa
    When se registra un inicio de sesión desde un dispositivo nuevo o una ubicación poco frecuente
    Then el sistema envía una notificación al paciente
    And la notificación indica el dispositivo, la ubicación aproximada y la hora del acceso
