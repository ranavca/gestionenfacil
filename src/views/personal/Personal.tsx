import { ColumnDef } from '@/components/shared'
import { Tooltip } from '@/components/ui'
import { HiOutlineClipboardCopy } from 'react-icons/hi'
import CreateDrawer from './components/CreateDrawer'
import usePersonal from './usePersonal'
import { User } from '@/@types/api'
import YesNoTag from '@/components/ui/YesNoTag'
import CommonTable from '@/components/shared/CommonTable'
import ErrorScreen from '@/components/shared/ErrorScreen'
import TableTools from '@/components/shared/TableTools'
import SectionLayout from '@/components/layouts/Section'
import ResetPasswordDialog from './components/ResetPasswordDialog'
import DeleteDialog from './components/DeleteDialog'

const columns: ColumnDef<User>[] = [
    {
        header: 'Id',
        accessorKey: 'id',
    },
    {
        header: 'Nombre',
        accessorKey: 'nombre',
    },
    {
        header: 'Apellido',
        accessorKey: 'apellido',
    },
    {
        header: 'Usuario',
        accessorKey: 'username',
    },
    {
        header: 'Email',
        accessorKey: 'email',
    },
    {
        header: 'Operativo',
        accessorKey: 'operativo',
        cell: (props) => {
            const row = props.row.original
            return <YesNoTag active={row.operativo} />
        },
    },
    {
        header: 'Acciones',
        cell: (props) => {
            const row = props.row.original
            const { openDeleteDialog, openPersonalDrawer } = usePersonal()
            return (
                <TableTools
                    onDelete={() => openDeleteDialog(row)}
                    onEdit={() => openPersonalDrawer(row)}
                    onPasswordReset={() => {}}
                />
            )
        },
    },
]

export default function Personal() {
    const { personal, openPersonalDrawer, reloadPersonal } = usePersonal()
    if (personal === 'error') return <ErrorScreen onRetry={reloadPersonal} />
    return (
        <>
            <SectionLayout
                loading={personal === null}
                onCreate={() => openPersonalDrawer('create')}
                onSearch={() => {}}
                onSync={reloadPersonal}
                name={{ plural: 'personal', singular: 'personal' }}
            >
                {personal !== null && (
                    <CommonTable<User> columns={columns} data={personal} />
                )}
            </SectionLayout>
            <CreateDrawer />
            <ResetPasswordDialog />
            <DeleteDialog />
        </>
    )
}
