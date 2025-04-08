"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRightLeft, TrendingUp, TrendingDown } from "lucide-react"

export default function CalculatorPage() {
  // General parameters
  const [vacationWeeks, setVacationWeeks] = useState(2)
  const [sickWeeks, setSickWeeks] = useState(1)
  const [studyWeeks, setStudyWeeks] = useState(1)

  // Employee parameters
  const [employeeSalary, setEmployeeSalary] = useState(2000)
  const [employeeContributions, setEmployeeContributions] = useState(17)

  // Contractor parameters
  const [contractorRate, setContractorRate] = useState(3000)
  const [contractorTax, setContractorTax] = useState(80)
  const [contractorHealthcare, setContractorHealthcare] = useState(100)
  const [contractorInsurance, setContractorInsurance] = useState(20)

  // Results
  const [employeeAnnualGross, setEmployeeAnnualGross] = useState(0)
  const [employeeContributionsAmount, setEmployeeContributionsAmount] = useState(0)
  const [employeeAnnualNet, setEmployeeAnnualNet] = useState(0)
  const [contractorWeeksWorked, setContractorWeeksWorked] = useState(0)
  const [contractorAnnualGross, setContractorAnnualGross] = useState(0)
  const [contractorAnnualExpenses, setContractorAnnualExpenses] = useState(0)
  const [contractorAnnualNet, setContractorAnnualNet] = useState(0)
  const [difference, setDifference] = useState(0)
  const [differencePercentage, setDifferencePercentage] = useState(0)

  const calculate = () => {
    // Employee calculations
    const employeeGross = employeeSalary * 13 // 12 months + 1 bonus
    const contributionsDeduction = employeeGross * (employeeContributions / 100)
    const employeeNet = employeeGross - contributionsDeduction

    // Contractor calculations
    const nonWorkingWeeks = Number(vacationWeeks) + Number(sickWeeks) + Number(studyWeeks)
    const weeksWorked = 52 - nonWorkingWeeks
    const monthsWorked = weeksWorked / 4

    const contractorGross = contractorRate * monthsWorked
    const annualExpenses = (Number(contractorTax) + Number(contractorHealthcare) + Number(contractorInsurance)) * 12
    const contractorNet = contractorGross - annualExpenses

    // Comparison
    const diff = contractorNet - employeeNet
    const diffPercentage = (diff / employeeNet) * 100

    // Update state
    setEmployeeAnnualGross(employeeGross)
    setEmployeeContributionsAmount(contributionsDeduction)
    setEmployeeAnnualNet(employeeNet)
    setContractorWeeksWorked(weeksWorked)
    setContractorAnnualGross(contractorGross)
    setContractorAnnualExpenses(annualExpenses)
    setContractorAnnualNet(contractorNet)
    setDifference(diff)
    setDifferencePercentage(diffPercentage)
  }

  // Calculate on initial load and when any input changes
  useEffect(() => {
    calculate()
  }, [
    vacationWeeks,
    sickWeeks,
    studyWeeks,
    employeeSalary,
    employeeContributions,
    contractorRate,
    contractorTax,
    contractorHealthcare,
    contractorInsurance,
  ])

  return (
    <main className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Calculadora Comparativa</h1>
          <p className="text-gray-600">
            Ingresa tus datos para comparar ingresos en 1 año como Empleado en Blanco vs Contractor
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* General Parameters */}
          <Card>
            <CardHeader>
              <CardTitle>Parámetros Generales</CardTitle>
              <CardDescription>Tiempo no trabajado</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="vacaciones">Semanas de Vacaciones</Label>
                  <Input
                    id="vacaciones"
                    type="number"
                    value={vacationWeeks}
                    onChange={(e) => setVacationWeeks(Number(e.target.value))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="enfermedad">Semanas de Enfermedad</Label>
                  <Input
                    id="enfermedad"
                    type="number"
                    value={sickWeeks}
                    onChange={(e) => setSickWeeks(Number(e.target.value))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="estudio">Semanas de Estudio</Label>
                  <Input
                    id="estudio"
                    type="number"
                    value={studyWeeks}
                    onChange={(e) => setStudyWeeks(Number(e.target.value))}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Employee */}
          <Card>
            <CardHeader>
              <CardTitle>Empleado en Blanco</CardTitle>
              <CardDescription>Datos de relación de dependencia</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="empleadoSueldo">Sueldo Mensual (USD)</Label>
                  <Input
                    id="empleadoSueldo"
                    type="number"
                    value={employeeSalary}
                    onChange={(e) => setEmployeeSalary(Number(e.target.value))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="empleadoAportes">% Aportes (aprox)</Label>
                  <Input
                    id="empleadoAportes"
                    type="number"
                    value={employeeContributions}
                    onChange={(e) => setEmployeeContributions(Number(e.target.value))}
                  />
                </div>
                <p className="text-sm text-gray-500 mt-4">El aguinaldo se asume = 1 sueldo extra al año.</p>
              </div>
            </CardContent>
          </Card>

          {/* Contractor */}
          <Card>
            <CardHeader>
              <CardTitle>Contractor</CardTitle>
              <CardDescription>Datos de trabajo independiente</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="contractorTarifa">Tarifa Mensual (USD)</Label>
                  <Input
                    id="contractorTarifa"
                    type="number"
                    value={contractorRate}
                    onChange={(e) => setContractorRate(Number(e.target.value))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contractorMonotributo">Monotributo (USD/mes)</Label>
                  <Input
                    id="contractorMonotributo"
                    type="number"
                    value={contractorTax}
                    onChange={(e) => setContractorTax(Number(e.target.value))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contractorObraSocial">Obra Social (USD/mes)</Label>
                  <Input
                    id="contractorObraSocial"
                    type="number"
                    value={contractorHealthcare}
                    onChange={(e) => setContractorHealthcare(Number(e.target.value))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contractorSeguro">Seguro (USD/mes)</Label>
                  <Input
                    id="contractorSeguro"
                    type="number"
                    value={contractorInsurance}
                    onChange={(e) => setContractorInsurance(Number(e.target.value))}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Results */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <ArrowRightLeft className="mr-2" /> Resultados Comparativos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="comparison">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="comparison">Comparación</TabsTrigger>
                <TabsTrigger value="employee">Empleado</TabsTrigger>
                <TabsTrigger value="contractor">Contractor</TabsTrigger>
              </TabsList>

              <TabsContent value="comparison" className="pt-4">
                <div className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-semibold mb-2">Diferencia Anual</h3>
                    <div className="flex items-center justify-center">
                      {difference >= 0 ? (
                        <TrendingUp className="h-6 w-6 text-green-500 mr-2" />
                      ) : (
                        <TrendingDown className="h-6 w-6 text-red-500 mr-2" />
                      )}
                      <span className={`text-2xl font-bold ${difference >= 0 ? "text-green-600" : "text-red-600"}`}>
                        {difference >= 0 ? "+" : ""}
                        {difference.toFixed(2)} USD
                      </span>
                    </div>
                    <p className={`text-lg ${difference >= 0 ? "text-green-600" : "text-red-600"}`}>
                      {differencePercentage.toFixed(2)}%
                    </p>
                  </div>

                  <p className="text-center text-gray-700">
                    {difference >= 0
                      ? `Como contractor ganas ${difference.toFixed(2)} USD más al año (+${differencePercentage.toFixed(2)}%).`
                      : `Como contractor ganas ${Math.abs(difference).toFixed(2)} USD menos al año (${differencePercentage.toFixed(2)}%).`}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold mb-2">Empleado en Blanco</h3>
                    <p className="text-gray-700">
                      Neto Anual: <span className="font-bold">${employeeAnnualNet.toFixed(2)} USD</span>
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold mb-2">Contractor</h3>
                    <p className="text-gray-700">
                      Neto Anual: <span className="font-bold">${contractorAnnualNet.toFixed(2)} USD</span>
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="employee" className="pt-4">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-semibold mb-2">Ingreso Bruto Anual</h3>
                      <p className="text-xl font-bold">${employeeAnnualGross.toFixed(2)} USD</p>
                      <p className="text-sm text-gray-500">13 sueldos (incluye aguinaldo)</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-semibold mb-2">Aportes</h3>
                      <p className="text-xl font-bold">-${employeeContributionsAmount.toFixed(2)} USD</p>
                      <p className="text-sm text-gray-500">{employeeContributions}% del bruto anual</p>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold mb-2">Ingreso Neto Anual</h3>
                    <p className="text-2xl font-bold">${employeeAnnualNet.toFixed(2)} USD</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="contractor" className="pt-4">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-semibold mb-2">Semanas Trabajadas</h3>
                      <p className="text-xl font-bold">{contractorWeeksWorked} semanas</p>
                      <p className="text-sm text-gray-500">{52 - contractorWeeksWorked} semanas no facturadas</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-semibold mb-2">Ingreso Bruto Anual</h3>
                      <p className="text-xl font-bold">${contractorAnnualGross.toFixed(2)} USD</p>
                      <p className="text-sm text-gray-500">{(contractorWeeksWorked / 4).toFixed(1)} meses facturados</p>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold mb-2">Gastos Anuales</h3>
                    <p className="text-xl font-bold">-${contractorAnnualExpenses.toFixed(2)} USD</p>
                    <p className="text-sm text-gray-500">Monotributo, Obra Social y Seguro</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold mb-2">Ingreso Neto Anual</h3>
                    <p className="text-2xl font-bold">${contractorAnnualNet.toFixed(2)} USD</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
