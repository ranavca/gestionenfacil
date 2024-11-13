import { ColumnDef, Loading } from '@/components/shared'
import { Button, Input } from '@/components/ui'
import { HiOutlinePlus, HiOutlineSearch } from 'react-icons/hi'
import Table from './components/Table'
import CommonTable from '@/components/shared/CommonTable'
import YesNoTag from '@/components/ui/YesNoTag'
import SectionLayout from '@/components/layouts/Section'
import { faker } from '@faker-js/faker/locale/es_MX'
import TableTools from '@/components/shared/TableTools'

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
    {
        header: 'Acciones',
        enableSorting: false,
        cell: (props) => {
            const row = props.row.original
            return <TableTools onEdit={() => {}} onDelete={() => {}} />
        },
    },
]

export default function Sucursales() {
    const data: Mock[] = Array(16)
        .fill(1)
        .map((_, i) => ({
            id: i + 1,
            nombre: faker.location.city(),
            correlativo: faker.number.int({ min: 1000, max: 2000 }),
            activo: faker.datatype.boolean(),
        }))
    return (
        <SectionLayout
            quantity={data.length}
            loading={false}
            onCreate={() => {}}
            onSync={() => {}}
            onSearch={() => {}}
            onReport={(setLoading, loading) => {}}
            name={{ plural: 'sucursales', singular: 'sucursal' }}
        >
            <CommonTable<Mock> columns={columns} data={data} />
        </SectionLayout>
    )
}
