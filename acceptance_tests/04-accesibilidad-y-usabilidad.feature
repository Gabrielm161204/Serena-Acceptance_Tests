Feature: EP09 Accesibilidad y Usabilidad
  Relacionado con las historias no funcionales US46, US47, US48 y US49.

  Scenario: US46 Mensajes sin tecnicismos y con ayuda contextual
    Given el usuario navega por las pantallas principales
    When lee títulos y mensajes
    Then no encuentra tecnicismos sin explicación
    And los conceptos clínicos incluyen ayuda contextual

  Scenario: US47 Funcionamiento correcto en Android e iOS
    Given el usuario instala la app en un dispositivo Android o iOS soportado
    When recorre las funciones principales
    Then todas las pantallas cargan sin errores
    And las acciones responden en pocos segundos

  Scenario: US48 Paleta de colores calmante aplicada
    Given el diseñador aplica la paleta de colores aprobada de tonos pastel o baja saturación
    When el paciente navega por las 5 pantallas principales
    Then no hay fondos de color rojo puro
    And no hay fondos de color naranja intenso
    And no hay combinaciones de alto contraste agresivo

  Scenario: US49 Tipografía y animaciones calmantes
    Given el paciente navega por las pantallas principales
    When observa los textos y las transiciones
    Then el tamaño mínimo de fuente es 14sp
    And las transiciones entre pantallas duran entre 200ms y 600ms
    And no hay animaciones con destellos o movimientos bruscos
