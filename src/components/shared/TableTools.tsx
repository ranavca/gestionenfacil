import {
    HiOutlineKey,
    HiOutlinePencilAlt,
    HiOutlineTrash,
} from 'react-icons/hi'
import { Tooltip } from '../ui'

export interface TableToolsProps {
    onEdit?: () => any
    onDelete?: () => any
    onPasswordReset?: () => any
}

export default function TableTools(props: TableToolsProps) {
    const { onEdit, onDelete, onPasswordReset } = props
    return (
        <div className="flex flex-row items-center gap-2">
            {onPasswordReset && (
                <Tooltip title="Cambiar contraseña">
                    <button onClick={onPasswordReset}>
                        <HiOutlineKey className="w-6 h-6" />
                    </button>
                </Tooltip>
            )}
            {onEdit && (
                <Tooltip title="Editar">
                    <button onClick={onEdit}>
                        <HiOutlinePencilAlt className="w-6 h-6" />
                    </button>
                </Tooltip>
            )}
            {onDelete && (
                <Tooltip title="Eliminar">
                    <button onClick={onDelete}>
                        <HiOutlineTrash className="w-6 h-6" />
                    </button>
                </Tooltip>
            )}
        </div>
    )
}
