import { ConfirmDialog } from '@/components/shared'
import { Tooltip } from '@/components/ui'
import { useState } from 'react'
import { HiOutlineClipboardCopy } from 'react-icons/hi'
import usePersonal from '../usePersonal'

export default function ResetPasswordDialog() {
    const { deleteDialog } = usePersonal()
    const [loading, setLoading] = useState(false)
    return (
        <ConfirmDialog
            isOpen={false}
            onClose={() => {}}
            onCancel={() => {}}
            type="warning"
            title="Restablecer contraseña"
            confirmButtonColor="yellow"
            loading={loading}
        >
            <p>¡Esta acción es irreversible!</p>
            <div className="flex flex-col mt-2 gap-1">
                <h2 className="font-bold text-base">¿Que sucederá?</h2>
                <p>
                    La contraseña de <span className="font-bold">Raimundo</span>{' '}
                    se restablecerá a los últimos 4 dígitos de su RUT antes del
                    dígito verificador.
                </p>
                <h2 className="font-bold text-base mt-2">Nueva contraseña</h2>
                <div className="flex flex-row items-center mt-2 gap-2">
                    <div className="h-9 px-2 bg-black/10 flex items-center justify-center rounded-md font-bold">
                        {Math.random().toString(36).slice(-8)}
                    </div>
                    <Tooltip title="Copiar">
                        <button className="h-9 px-2 bg-black/10 flex items-center justify-center rounded-md">
                            <HiOutlineClipboardCopy className="h-6 w-6" />
                        </button>
                    </Tooltip>
                </div>
            </div>
        </ConfirmDialog>
    )
}
