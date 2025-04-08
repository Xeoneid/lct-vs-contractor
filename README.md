# Calculadora Comparativa: Empleado en Blanco (LCT) vs Contractor

Este proyecto es una **Single-Page Application (SPA)** que permite comparar, de manera sencilla y en **tiempo real**, la diferencia entre trabajar como **Empleado en Blanco** (en Argentina) vs. **Contractor** (freelance para el exterior), teniendo en cuenta:

- Salario mensual
- Aportes y gastos (monotributo, obra social, seguro, etc.)
- Tiempo de vacaciones, enfermedad y estudio (días o semanas no trabajadas)
- Valor del dólar (manual)
- Aguinaldo o 13.er sueldo (empleado en blanco)

## ¿Qué hace esta app?

1. **Toma datos de entrada** sobre tu sueldo, tarifas, costos y semanas de licencia (vacaciones, enfermedad y estudio).
2. **Calcula** tu **ingreso anual** estimado en ambas modalidades: empleado en blanco vs. contractor.
3. **Muestra** una **comparación** para que veas cuál modalidad te rinde mejor o cuánto deberías ajustar tu tarifa como contractor para igualar tu ingreso en relación de dependencia.

## Como se calcula?

### Empleado en Blanco (Ley de Contrato de Trabajo argentina)

1. **Ingreso Bruto Anual**:
   \[
   \text{IngresoBrutoAnual} = 12 \times \text{SueldoMensual} + \text{SueldoMensual} 
   \]
   > *Sumamos 12 sueldos más 1 sueldo adicional por aguinaldo (13.er sueldo).*

2. **Aportes** (porcentaje sobre el bruto):
   \[
   \text{Aportes} = \text{IngresoBrutoAnual} \times \left(\frac{\text{PorcentajeAportes}}{100}\right)
   \]

3. **Ingreso Neto Anual**:
   \[
   \text{IngresoNetoAnual} = \text{IngresoBrutoAnual} - \text{Aportes}
   \]

4. **Vacaciones y licencias** (vacaciones, enfermedad, estudio) se consideran **pagas** y no reducen el ingreso.

### Contractor

1. **Semanas no trabajadas** (vacaciones, enfermedad, estudio):
   \[
   \text{SemanasNoTrabajadas} = \text{Vacaciones} + \text{Enfermedad} + \text{Estudio}
   \]

2. **Semanas trabajadas**:
   \[
   \text{SemanasTrabajadas} = 52 - \text{SemanasNoTrabajadas}
   \]

3. **Meses equivalentes trabajados** (aprox. 4 semanas = 1 mes):
   \[
   \text{MesesTrabajados} = \frac{\text{SemanasTrabajadas}}{4}
   \]

4. **Ingreso Bruto Anual**:
   \[
   \text{IngresoBrutoAnualFreelance} = \text{TarifaMensual} \times \text{MesesTrabajados}
   \]

5. **Gastos Anuales** (monotributo, obra social, seguro, etc.):
   \[
   \text{GastosAnuales} = (\text{Monotributo} + \text{ObraSocial} + \text{Seguro}) \times 12
   \]

6. **Ingreso Neto Anual**:
   \[
   \text{IngresoNetoAnualFreelance} = \text{IngresoBrutoAnualFreelance} - \text{GastosAnuales}
   \]

## Disclaimer

Esto es solo una **estimación** orientativa. Las regulaciones, aportes y costos reales pueden variar.