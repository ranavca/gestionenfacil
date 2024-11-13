import { COLOR_1, COLOR_2, COLOR_3, COLOR_4 } from '@/constants/chart.constant'
import Chart from 'react-apexcharts'

export interface LineGraphProps {
    data: ApexAxisChartSeries
    labels: string[]
}

export default function LineGraph(props: LineGraphProps) {
    const { data, labels } = props
    return (
        <Chart
            options={{
                chart: {
                    toolbar: {
                        show: false,
                    },
                    type: 'line',
                    zoom: {
                        enabled: false,
                    },
                },
                yaxis: {
                    labels: {
                        formatter: function (value) {
                            return new Intl.NumberFormat('es-CL', {
                                style: 'currency',
                                currency: 'CLP',
                            }).format(value)
                        },
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    curve: 'smooth',
                    width: 3,
                },
                colors: [COLOR_1, COLOR_3, COLOR_4],
                xaxis: {
                    categories: labels,
                },
            }}
            series={data}
            height={300}
        />
    )
}
