import { useState } from 'react'
import TableUi from '@/components/ui/Table'
import {
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    useReactTable,
} from '@tanstack/react-table'
import type { ColumnDef, ColumnSort } from '@tanstack/react-table'
import { Tooltip } from '@/components/ui'
import {
    HiOutlineKey,
    HiOutlinePencilAlt,
    HiOutlineTrash,
} from 'react-icons/hi'
import { User } from '@/@types/api'
import { Loading } from '@/components/shared'
import YesNoTag from '@/components/ui/YesNoTag'

const { Tr, Th, Td, THead, TBody, Sorter } = TableUi

interface Mock {
    id: number
    nombre: string
    correlativo: number
    activo: boolean
}

const Id = (props: Mock) => <span className="font-bold">#{props.id}</span>

const Tools = (props: Mock) => {
    return (
        <div className="flex flex-row items-center gap-2">
            <Tooltip title="Eliminar">
                <button>
                    <HiOutlineTrash className="w-6 h-6" />
                </button>
            </Tooltip>
            <Tooltip title="Editar">
                <button>
                    <HiOutlinePencilAlt className="w-6 h-6" />
                </button>
            </Tooltip>
        </div>
    )
}

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
            return <Tools {...row} />
        },
    },
]

const Table = () => {
    const data: Mock[] = [
        {
            id: 1,
            nombre: 'Agustinas',
            correlativo: 45634,
            activo: true,
        },
        {
            id: 2,
            nombre: 'San Bernardo',
            correlativo: 12534,
            activo: false,
        },
    ]
    const [sorting, setSorting] = useState<ColumnSort[]>([])

    const table = useReactTable({
        data,
        columns,
        state: {
            sorting,
        },
        manualSorting: true,
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
    })

    return (
        <TableUi>
            <THead>
                {table.getHeaderGroups().map((headerGroup) => (
                    <Tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => {
                            return (
                                <Th key={header.id} colSpan={header.colSpan}>
                                    {header.isPlaceholder ? null : (
                                        <div
                                            {...{
                                                className:
                                                    header.column.getCanSort()
                                                        ? 'cursor-pointer select-none'
                                                        : '',
                                                onClick:
                                                    header.column.getToggleSortingHandler(),
                                            }}
                                        >
                                            {flexRender(
                                                header.column.columnDef.header,
                                                header.getContext(),
                                            )}
                                            {
                                                <Sorter
                                                    sort={header.column.getIsSorted()}
                                                />
                                            }
                                        </div>
                                    )}
                                </Th>
                            )
                        })}
                    </Tr>
                ))}
            </THead>
            <TBody>
                {table
                    .getRowModel()
                    .rows.slice(0, 10)
                    .map((row) => {
                        return (
                            <Tr key={row.id}>
                                {row.getVisibleCells().map((cell) => {
                                    return (
                                        <Td key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext(),
                                            )}
                                        </Td>
                                    )
                                })}
                            </Tr>
                        )
                    })}
            </TBody>
        </TableUi>
    )
}

export default Table
