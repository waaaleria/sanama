import Table from "@/components/table/Table"
import { usePathname } from "next/navigation"

// Columns for the Laboratory table
const columns = [
    { name: "Fecha actualización" },
    { name: "Médico prescriptor" },
    { name: "Muestra" },
    { name: "Estado" },
    { name: "Opciones" }
]

const options = [
    {
        text: "Ver resultados",
        link: "/lab-results",
    }
]

const LaboratoryTable = ({ data }) => {
    const pathname = usePathname()
    const modifiedOptions = options.map((option) => ({
        ...option,
        link: `${pathname}/${option.link}`,
    }))

    return (
        <Table
            columns={columns}
            data={data}
            options={modifiedOptions}
        // url={`/patients/profile/${id}/lab-results`}
        // iconName="fa fa-file"
        />
    )
}

export default LaboratoryTable