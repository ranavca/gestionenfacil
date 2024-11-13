import { ColumnDef, Loading } from '@/components/shared'
import { Button, Input } from '@/components/ui'
import { HiOutlinePlus, HiOutlineSearch } from 'react-icons/hi'
import Table from './components/Table'
import CommonTable from '@/components/shared/CommonTable'
import YesNoTag from '@/components/ui/YesNoTag'
import SectionLayout from '@/components/layouts/Section'

interface Mock {
    id: number
    nombre: string
    correlativo: number
    activo: boolean
}

const Id = (props: Mock) => <span className="font-bold">#{props.id}</span>

const columns: ColumnDef<Mock>[] = [
    {
        header: 'Id',
        accessorKey: 'id',
        cell: (props) => {
            const row = props.row.original
            return <Id {...row} />
        },
    },
    {
        header: 'Nombre',
        accessorKey: 'nombre',
    },
    {
        header: 'Correlativo sobre',
        accessorKey: 'correlativo',
    },
    {
        header: 'Activa',
        accessorKey: 'activo',
        cell: (props) => {
            const row = props.row.original
            return <YesNoTag active={row.activo} />
        },
    },
    // {
    //     header: 'Acciones',
    //     enableSorting: false,
    //     cell: (props) => {
    //         const row = props.row.original
    //         return <Tools {...row} />
    //     },
    // },
]

export default function Sucursales() {
    return (
        <SectionLayout
            loading={false}
            onSearch={() => {}}
            onCreate={() => {}}
            onReport={(setLoading, loading) => {}}
            name={{ plural: 'empresas', singular: 'empresa' }}
        >
            <CommonTable<Mock> columns={columns} data={[]} />
        </SectionLayout>
    )
}
