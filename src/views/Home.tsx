import { Button, Card, Tag } from '@/components/ui'
import { faker } from '@faker-js/faker'
import Chart from 'react-apexcharts'
import useAuth from '@/utils/hooks/useAuth'
import { COLORS } from '@/constants/chart.constant'
import LineGraph from '@/components/shared/LineGraph'
import Table from '@/components/shared/Table'
import { HiArrowDown, HiArrowUp } from 'react-icons/hi'
import { Loading } from '@/components/shared'

const SimpleDonut = () => {
    return (
        <Chart
            options={{
                colors: COLORS,
                labels: ['Enero'],
                dataLabels: {
                    enabled: false,
                },
                legend: {
                    position: 'bottom',
                },
                responsive: [
                    {
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: 200,
                            },
                            legend: {
                                position: 'bottom',
                            },
                        },
                    },
                ],
            }}
            series={[44, 55, 41, 17, 15]}
            height={300}
            type="donut"
        />
    )
}

const Home = () => {
    const { user } = useAuth()
    return (
        <Loading loading={false}>
            <div className="flex flex-col gap-6">
                <h1 className="text-2xl font-bold">
                    <span className="font-normal opacity-50">Hola,</span>{' '}
                    {user.userName} 👋
                </h1>
                <div className="flex flex-col gap-3">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                        <Card>
                            <div className="flex flex-col gap-1">
                                <h2 className="text-lg font-bold leading-none">
                                    Ventas
                                </h2>
                                <p className="leading-none">Este mes</p>
                            </div>
                            <div className="flex flex-row items-center mt-3 mb-2 gap-3">
                                <p className="text-3xl leading-none">173</p>
                                <Tag className="text-green-800 bg-green-200 border-0 flex items-center flex-row gap-1">
                                    <HiArrowUp />
                                    400%
                                </Tag>
                            </div>
                            <small>
                                <span className="font-bold">+400%</span>{' '}
                                respecto al mes anterior
                            </small>
                        </Card>
                        <Card>
                            <div className="flex flex-col gap-1">
                                <h2 className="text-lg font-bold leading-none">
                                    Ingresos
                                </h2>
                                <p className="leading-none">Este mes</p>
                            </div>
                            <div className="flex flex-row items-center mt-3 mb-2 gap-3">
                                <p className="text-3xl leading-none">
                                    $1.234.956
                                </p>
                                <Tag className="text-red-800 bg-red-200 border-0 flex items-center flex-row gap-1">
                                    <HiArrowDown />
                                    34%
                                </Tag>
                            </div>
                            <small>
                                <span className="font-bold">-34%</span> respecto
                                al mes anterior
                            </small>
                        </Card>
                        <Card>
                            <div className="flex flex-col gap-1">
                                <h2 className="text-lg font-bold leading-none">
                                    Ventas
                                </h2>
                                <p className="leading-none">Este mes</p>
                            </div>
                            <div className="flex flex-row items-center mt-3 mb-2 gap-3">
                                <p className="text-3xl leading-none">173</p>
                                <Tag className="text-green-800 bg-green-200 border-0 flex items-center flex-row gap-1">
                                    <HiArrowUp />
                                    400%
                                </Tag>
                            </div>
                            <small>
                                <span className="font-bold">+34%</span> respecto
                                al mes anterior
                            </small>
                        </Card>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                        <Card className="grid col-span-2">
                            <div>
                                <h2 className="text-lg font-bold">Reporte</h2>
                                <LineGraph
                                    labels={[
                                        'Ene',
                                        'Feb',
                                        'Mar',
                                        'Abr',
                                        'May',
                                        'Jun',
                                        'Jul',
                                        'Ago',
                                        'Sep',
                                        'Oct',
                                        'Nov',
                                        'Dic',
                                    ]}
                                    data={[
                                        {
                                            name: 'Ventas',
                                            data: [
                                                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                                                1,
                                            ].map(() =>
                                                Math.floor(
                                                    Math.random() * 100000,
                                                ),
                                            ),
                                        },
                                        {
                                            name: 'Saldos pendientes',
                                            data: [
                                                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                                                1,
                                            ].map(() =>
                                                Math.floor(
                                                    Math.random() * 10000,
                                                ),
                                            ),
                                        },
                                    ]}
                                />
                            </div>
                        </Card>
                        <Card>
                            <h2 className="text-lg font-bold">
                                Ordenes por sucursal
                            </h2>
                            <div className="mt-2">
                                <SimpleDonut />
                            </div>
                        </Card>
                    </div>
                    <Card className="grid col-span-2">
                        <div className="flex flex-row items-center justify-between">
                            <h2 className="text-lg font-bold">
                                Últimas ordenes
                            </h2>
                            <Button size="sm">Ver ordenes</Button>
                        </div>
                        <Table
                            header={[
                                'N° Orden',
                                'Fecha',
                                'Vendedor',
                                'Cliente',
                                'Monto',
                                'Estado',
                            ]}
                            body={[
                                ...[1, 1, 1, 1, 1, 1, 1].map(() => [
                                    <span className="font-bold">
                                        #{Math.floor(Math.random() * 100000)}
                                    </span>,
                                    new Date().toLocaleDateString(),
                                    'Rodrigo Bustorf',
                                    faker.person.fullName(),
                                    new Intl.NumberFormat('es-CL', {
                                        style: 'currency',
                                        currency: 'CLP',
                                    }).format(
                                        Math.floor(Math.random() * 100000),
                                    ),
                                    <Tag className="bg-green-200 text-green-700 border-0">
                                        Cerrado
                                    </Tag>,
                                ]),
                            ]}
                        />
                    </Card>
                </div>
            </div>
        </Loading>
    )
}

export default Home
