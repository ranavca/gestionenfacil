import { ConfirmDialog } from '@/components/shared'
import { toast, Tooltip } from '@/components/ui'
import { useState } from 'react'
import { HiOutlineClipboardCopy } from 'react-icons/hi'
import usePersonal from '../usePersonal'
import ErrorToast from '@/components/ui/ErrorToast'

export default function DeleteDialog() {
    const { deleteDialog, closeDeleteDialog, deletePersonal, reloadPersonal } =
        usePersonal()
    const [loading, setLoading] = useState(false)
    const onDelete = async () => {
        if (deleteDialog === null) return
        setLoading(true)
        try {
            await deletePersonal(deleteDialog)
            closeDeleteDialog()
            reloadPersonal()
        } catch (error) {
            toast.push(ErrorToast)
        }
        setLoading(false)
    }
    return (
        <ConfirmDialog
            closable={false}
            isOpen={deleteDialog !== null}
            onClose={closeDeleteDialog}
            onCancel={closeDeleteDialog}
            onConfirm={onDelete}
            type="danger"
            title="¡Un momento!"
            confirmButtonColor="red"
            confirmText="Eliminar"
            loading={loading}
        >
            <p>
                Estás a punto de eliminar a{' '}
                <span className="font-bold">
                    {deleteDialog?.nombre} {deleteDialog?.apellido}
                </span>{' '}
                de la base de datos. ¡Esta acción es irreversible y revocará su
                acceso!
            </p>
        </ConfirmDialog>
    )
}
