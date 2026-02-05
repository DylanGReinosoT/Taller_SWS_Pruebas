# Microservicio de Cuentas - Pruebas Unitarias

## Descripción General

El presente documento describe los resultados obtenidos al ejecutar las pruebas unitarias del microservicio **microservicio-cuentas**, desarrollado con Next.js y probado utilizando el framework **Jest**.

El objetivo de estas pruebas es verificar el correcto funcionamiento de los principales procesos relacionados con la gestión de cuentas, garantizando la calidad y confiabilidad del sistema.

---

## Ejecución de Pruebas

Las pruebas fueron ejecutadas mediante el siguiente comando:

```bash
npm run test
```

Este comando invoca al framework Jest para ejecutar los casos de prueba definidos en el proyecto.

---

## Resultados Obtenidos

Al ejecutar las pruebas, se obtuvo la siguiente salida:

```
PASS  src/cuentas/cuentas.service.spec.ts
 CuentasService
  √ NO debe crear cuenta si el número de cuenta ya existe (19 ms)
  √ Debe crear cuenta si el número no existe (2 ms)
  √ Debe obtener una cuenta existente (2 ms)
  √ Debe lanzar error si la cuenta no existe (2 ms)
  √ Debe realizar retiro correctamente (3 ms)
  √ Debe fallar el retiro si no hay saldo suficiente (3 ms)

Test Suites: 1 passed, 1 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        4.666 s
Ran all test suites.
```

---

## Detalle de Casos de Prueba

Los siguientes casos fueron evaluados dentro del servicio `CuentasService`:

| N° | Caso de Prueba | Descripción |
|----|---------------|-------------|
| 1 | No crear cuenta duplicada | Verifica que el sistema no permita crear una cuenta con un número ya existente. |
| 2 | Crear cuenta válida | Confirma que se pueda crear una cuenta cuando el número no está registrado. |
| 3 | Obtener cuenta existente | Valida la recuperación correcta de una cuenta registrada. |
| 4 | Error por cuenta inexistente | Comprueba que el sistema lance una excepción cuando la cuenta no existe. |
| 5 | Retiro exitoso | Verifica que el retiro se realice correctamente cuando hay saldo suficiente. |
| 6 | Retiro fallido por saldo insuficiente | Valida que el sistema rechace el retiro si el saldo es insuficiente. |

---

## Interpretación de los Resultados

De acuerdo con los resultados obtenidos, se puede interpretar lo siguiente:

- Se ejecutó una única suite de pruebas correspondiente al módulo `CuentasService`.
- Se implementaron seis pruebas unitarias enfocadas en las funcionalidades críticas del sistema.
- Todas las pruebas fueron aprobadas satisfactoriamente.
- No se detectaron errores de ejecución ni fallos lógicos en los escenarios evaluados.
- El tiempo total de ejecución fue de 4.666 segundos, lo cual indica un desempeño adecuado del proceso de testing.

Esto demuestra que las funciones principales del microservicio cumplen con los requisitos establecidos y se comportan de forma esperada ante situaciones normales y excepcionales.

---

## Importancia de las Pruebas Unitarias

Las pruebas unitarias permiten:

- Detectar errores en etapas tempranas del desarrollo.
- Garantizar la estabilidad del código ante futuras modificaciones.
- Facilitar el mantenimiento del sistema.
- Mejorar la confiabilidad del microservicio.

En este proyecto, el uso de Jest contribuye a mantener un estándar de calidad en el desarrollo del software.

---

## Conclusiones

Con base en los resultados obtenidos, se concluye que:

- El microservicio de cuentas presenta un funcionamiento correcto en los procesos evaluados.
- La lógica de creación, consulta y retiro de cuentas es estable.
- El sistema maneja adecuadamente los errores relacionados con datos inexistentes o saldo insuficiente.
- Las pruebas unitarias cumplen su función de validación y control de calidad.

Por lo tanto, el módulo `CuentasService` se encuentra en condiciones adecuadas para su integración dentro del sistema.

---

## Recomendaciones

- Implementar pruebas adicionales para escenarios más complejos.
- Incluir pruebas de integración entre microservicios.
- Automatizar la ejecución de pruebas en un pipeline CI/CD.
- Mantener actualizados los casos de prueba conforme evolucione el sistema.

