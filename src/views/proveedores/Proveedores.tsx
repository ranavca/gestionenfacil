import { ColumnDef } from '@/components/shared'
import { Tooltip } from '@/components/ui'
import { HiOutlineClipboardCopy } from 'react-icons/hi'
import CreateDrawer from './components/CreateDrawer'
import { User } from '@/@types/api'
import YesNoTag from '@/components/ui/YesNoTag'
import CommonTable, { checkboxColumn } from '@/components/shared/CommonTable'
import ErrorScreen from '@/components/shared/ErrorScreen'
import TableTools from '@/components/shared/TableTools'
import SectionLayout from '@/components/layouts/Section'
import ResetPasswordDialog from './components/ResetPasswordDialog'
import DeleteDialog from './components/DeleteDialog'
import { faker } from '@faker-js/faker/locale/es_MX'

export interface Mock {
    id: number
    nombre: string
}

const columns: ColumnDef<Mock>[] = [
    {
        header: 'Id',
        accessorKey: 'id',
    },
    {
        header: 'Nombre',
        accessorKey: 'nombre',
    },
    {
        header: 'Acciones',
        cell: (props) => {
            const row = props.row.original
            return <TableTools onDelete={() => {}} onEdit={() => {}} />
        },
    },
]

export default function Proveedores() {
    const data: Mock[] = Array(64)
        .fill(1)
        .map((_, i) => ({
            id: i + 1,
            nombre: faker.company.name(),
        }))
    return (
        <>
            <SectionLayout
                quantity={data.length}
                loading={false}
                onCreate={() => {}}
                onSync={() => {}}
                onSearch={() => {}}
                onReport={(setLoading, loading) => {}}
                name={{ plural: 'proveedores', singular: 'proveedor' }}
            >
                <CommonTable<Mock> columns={columns} data={data} />
            </SectionLayout>
        </>
    )
}
