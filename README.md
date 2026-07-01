# Acceptance Tests - Proyecto Serena

Este repositorio contiene los archivos `.feature` en lenguaje **Gherkin** para las pruebas de aceptación del proyecto **Serena**.

Cubre la totalidad de las épicas e historias de usuario definidas en el proyecto (EP01–EP10 / US01–US50).

---

## Cobertura completa por épica

| Archivo | Épica | User Stories cubiertas |
|---|---|---|
| `01-registro-estado-emocional.feature` | EP01 Registro de Estado Emocional | US01, US02, US03, US04 |
| `02-seguimiento-y-reportes.feature` | EP02 Seguimiento y Reportes | US09, US10, US12, US13 |
| `05-alertas-y-riesgo.feature` | EP03 Alertas y Riesgo | US16, US17, US18, US19, US20, US21 |
| `06-regulacion-emocional.feature` | EP04 Regulación Emocional | US22, US23, US24, US25, US26, US27 |
| `07-comunicacion-paciente-especialista.feature` | EP05 Comunicación Paciente–Especialista | US28, US29, US30, US31 |
| `08-gestion-cuentas-perfiles.feature` | EP06 Gestión de Cuentas y Perfiles | US32, US33, US34, US35, US36 |
| `09-apoyo-con-ia.feature` | EP07 Apoyo con IA | US37, US38, US39, US40, US41 |
| `03-seguridad-y-privacidad.feature` | EP08 Seguridad y Privacidad | US42, US43, US44, US45 |
| `04-accesibilidad-y-usabilidad.feature` | EP09 Accesibilidad y Usabilidad | US46, US47, US48, US49 |
| `10-medicacion.feature` | EP10 Medicación | US50 |

---

## Estructura del repositorio

```text
acceptance_tests/
  01-registro-estado-emocional.feature
  02-seguimiento-y-reportes.feature
  03-seguridad-y-privacidad.feature
  04-accesibilidad-y-usabilidad.feature
  05-alertas-y-riesgo.feature
  06-regulacion-emocional.feature
  07-comunicacion-paciente-especialista.feature
  08-gestion-cuentas-perfiles.feature
  09-apoyo-con-ia.feature
  10-medicacion.feature
README.md
```

---

## Notas
- Los escenarios están redactados en español siguiendo el formato **Given–When–Then** (Gherkin).
- Cada archivo `.feature` indica en su encabezado la épica y las user stories que cubre.
- Los archivos están listos para integrarse con frameworks BDD como **Cucumber** (Java/Ruby) o **SpecFlow** (C#).
