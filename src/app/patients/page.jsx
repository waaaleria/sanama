"use client"
import { useEffect, useState } from "react"
import PatientTable from "./PatientTable"
import { patientService } from "@/services/patientService"
import { parsePatientTable } from "@/util/patientParser"
import SearchBar from "@/components/bars/SearchBar"


const PatientPage = () => {
    const [patientTable, setPatientTable] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await patientService.buscarPorFiltro("")
                const tableData = parsePatientTable(data)
                setPatientTable(tableData)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])


    return (
        <main>
            <div className=" font-bold min-h-screen p-10 bg-slate-200">
                <div className=" font-bold min-h-screen bg-slate-100 p-10">
                    <h1 className="text-blue-500 text-6xl pb-8" >Pacientes</h1>

                    <SearchBar />

                    <div className="pt-10" >
                        <PatientTable data={patientTable}></PatientTable>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default PatientPage