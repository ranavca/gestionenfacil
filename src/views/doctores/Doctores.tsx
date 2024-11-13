import { ColumnDef, Loading } from '@/components/shared'
import { Button, Input } from '@/components/ui'
import { HiOutlinePlus, HiOutlineSearch } from 'react-icons/hi'
import Table from './components/Table'
import CommonTable from '@/components/shared/CommonTable'
import YesNoTag from '@/components/ui/YesNoTag'
import SectionLayout from '@/components/layouts/Section'
import TableTools from '@/components/shared/TableTools'
import { faker } from '@faker-js/faker/locale/es_MX'

interface Mock {
    id: number
    nombre: string
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
        header: 'Acciones',
        enableSorting: false,
        cell: (props) => {
            const row = props.row.original
            return <TableTools onDelete={() => {}} onEdit={() => {}} />
        },
    },
]

export default function Sucursales() {
    const data: Mock[] = Array(47)
        .fill(1)
        .map((_, i) => ({
            id: i + 1,
            nombre: faker.person.fullName(),
        }))
    return (
        <SectionLayout
            quantity={data.length}
            loading={false}
            onSearch={() => {}}
            onCreate={() => {}}
            onSync={() => {}}
            onReport={(setLoading, loading) => {}}
            name={{ plural: 'doctores', singular: 'doctor' }}
        >
            <CommonTable<Mock> columns={columns} data={data} />
        </SectionLayout>
    )
}
