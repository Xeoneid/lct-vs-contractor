# Calculadora Comparativa: Empleado en Blanco (LCT) vs Contractor

Este proyecto es una **Single-Page Application (SPA)** que permite comparar, de manera sencilla y en **tiempo real**, la diferencia entre trabajar como **Empleado en Blanco** (en Argentina) vs. **Contractor** (freelance para el exterior), teniendo en cuenta:

- Salario mensual
- Aportes y gastos (monotributo, obra social, seguro, etc.)
- Tiempo de vacaciones, enfermedad y estudio (días o semanas no trabajadas)
- Valor del dólar (manual)
- Aguinaldo o 13.er sueldo (empleado en blanco)

## 1. ¿Qué hace esta app?

1. **Toma datos de entrada** sobre tu sueldo, tarifas, costos y semanas de licencia (vacaciones, enfermedad y estudio).
2. **Calcula** tu **ingreso anual** estimado en ambas modalidades: empleado en blanco vs. contractor.
3. **Muestra** una **comparación** para que veas cuál modalidad te rinde mejor o cuánto deberías ajustar tu tarifa como contractor para igualar tu ingreso en relación de dependencia.

## 2. ¿Cómo usarla?

1. **Clona o descarga** este repositorio.
2. Abre el archivo `index.html` en tu navegador.
3. Completa los campos en la página (no se requiere instalar nada).
4. Observa cómo los resultados se **actualizan automáticamente** al modificar cualquier valor.

## 3. Estructura

Este proyecto consiste en un único archivo principal:
- **`index.html`**: Contiene todo el markup (HTML) y el script de JavaScript embebido que hace los cálculos.  
  - Se divide en secciones de inputs, resultados y un pequeño CSS inline para estilo básico.  
  - No se requiere backend; todo ocurre en el navegador.

## 4. Fórmulas Matemáticas

### 4.1. Empleado en Blanco

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

### 4.2. Contractor (Freelance)

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

### 4.3. Comparación

1. **Diferencia Absoluta**:
   \[
   \Delta = \text{IngresoNetoAnualFreelance} - \text{IngresoNetoAnual}
   \]
   > Si \(\Delta > 0\), se gana más como contractor;  
   > Si \(\Delta < 0\), se gana más como empleado en blanco.

2. **Diferencia Porcentual** (respecto al ingreso como empleado):
   \[
   \% \Delta = \left(\frac{\Delta}{\text{IngresoNetoAnual}}\right) \times 100 
   \]

## 5. Personalización

- Puedes modificar la lógica para:
  - Usar días en vez de semanas.
  - Trabajar con horas y tarifas horarias.
  - Cambiar el factor de conversión de semanas a meses (no siempre son 4 exactas).
  - Habilitar o deshabilitar el cálculo de aguinaldo.
  - Agregar comisiones bancarias, retenciones de plataforma, etc.

## 6. Importante

- Esto es solo una **estimación** orientativa. Las regulaciones, aportes y costos reales pueden variar.  
- Consultar con asesores contables y legales para cálculos definitivos.

## 7. Licencia

Este proyecto se distribuye bajo la [MIT License](LICENSE). ¡Usá, modificá y compartí libremente!

---
¡Gracias por usar esta calculadora comparativa!  
Cualquier sugerencia o mejora, abrí un issue o PR en este repositorio.
