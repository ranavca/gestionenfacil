import { ColumnDef, Loading } from '@/components/shared'
import { Button, Input } from '@/components/ui'
import { HiOutlinePlus, HiOutlineSearch } from 'react-icons/hi'
import Table from './components/Table'
import CommonTable from '@/components/shared/CommonTable'
import YesNoTag from '@/components/ui/YesNoTag'
import SectionLayout from '@/components/layouts/Section'
import { faker } from '@faker-js/faker/locale/es'

interface Mock {
    id: number
    sucursal: string
    documento: 'Boleta'
    fecha: string
    tipo: 'Pago final'
    formaDePago: 'Cheque al día'
    NoDeCheque: number
    banco: string
    titular: string
    monto: number
    recepcionado: boolean
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
        header: 'Sucursal',
        accessorKey: 'sucursal',
    },
    {
        header: 'Documento',
        accessorKey: 'documento',
    },
    {
        header: 'Fecha',
        accessorKey: 'fecha',
    },
    {
        header: 'Tipo',
        accessorKey: 'tipo',
    },
    {
        header: 'Forma de pago',
        accessorKey: 'formaDePago',
    },
    {
        header: 'No. de cheque',
        accessorKey: 'NoDeCheque',
    },
    {
        header: 'Banco',
        accessorKey: 'banco',
        cell: () => (
            <div className="flex flex-row items-center gap-3 min-w-28">
                <img src="/bch.png" alt="" className="h-5 opacity-60" />
                Banco de Chile
            </div>
        ),
    },
    {
        header: 'Titular',
        accessorKey: 'titular',
    },
    {
        header: 'Monto',
        accessorKey: 'monto',
    },
    {
        header: 'Recepcionado',
        accessorKey: 'recepcionado',
        cell: (props) => {
            const row = props.row.original
            return <YesNoTag active={row.recepcionado} />
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
    const data: Mock[] = Array(452)
        .fill(1)
        .map((_, i) => ({
            id: i + 1,
            sucursal: faker.location.city(),
            documento: 'Boleta',
            fecha: faker.date.past().toLocaleDateString(),
            tipo: 'Pago final',
            formaDePago: 'Cheque al día',
            NoDeCheque: faker.number.int({ min: 1000, max: 4000 }),
            banco: faker.finance.creditCardIssuer(),
            titular: faker.person.fullName(),
            monto: faker.commerce.price({ symbol: '$' }),
            recepcionado: faker.datatype.boolean(),
        }))
    return (
        <SectionLayout
            quantity={data.length}
            loading={false}
            onSearch={() => {}}
            onReport={(setLoading, loading) => {}}
            name={{ plural: 'cheques', singular: 'cheque' }}
        >
            <CommonTable<Mock> columns={columns} data={data} />
        </SectionLayout>
    )
}
