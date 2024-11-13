import {
    HiOutlineDownload,
    HiOutlinePlus,
    HiOutlineRefresh,
    HiOutlineSearch,
} from 'react-icons/hi'
import { Loading } from '../shared'
import { Button, Input } from '../ui'
import {
    ChangeEventHandler,
    Dispatch,
    PropsWithChildren,
    SetStateAction,
    useState,
} from 'react'

export interface SectionLayoutProps {
    loading?: boolean
    onSearch: ChangeEventHandler<HTMLInputElement>
    quantity?: number
    onSync?: () => any
    onCreate?: () => any
    onReport?: (
        setLoading: Dispatch<SetStateAction<boolean>>,
        loading: boolean,
    ) => any
    name: {
        plural: string
        singular: string
    }
}

export default function SectionLayout(
    props: PropsWithChildren<SectionLayoutProps>,
) {
    const [reportLoading, setReportLoading] = useState(false)
    const {
        loading,
        children,
        onSearch,
        onCreate,
        name,
        onReport,
        onSync,
        quantity,
    } = props
    const onReportDownload = () => {
        if (!onReport) return
        onReport(setReportLoading, reportLoading)
    }
    return (
        <Loading loading={loading}>
            <main>
                <div className="flex flex-row items-center justify-between w-full">
                    <div className="flex flex-col leading-none">
                        <h1 className="text-2xl capitalize">{name.plural}</h1>
                        {quantity && <p>{quantity} resultados</p>}
                    </div>
                    <div className="flex flex-row items-center gap-3">
                        {onSync && (
                            <Button
                                size="sm"
                                onClick={onSync}
                                className="flex flex-row items-center gap-2"
                            >
                                <HiOutlineRefresh className="h-4 w-4" />
                                Sincronizar
                            </Button>
                        )}
                        {onReport && (
                            <Button
                                size="sm"
                                onClick={onReportDownload}
                                loading={reportLoading}
                                className="flex flex-row items-center gap-2"
                            >
                                <HiOutlineDownload className="h-4 w-4" />
                                Exportar
                            </Button>
                        )}
                        {onCreate && (
                            <Button
                                variant="solid"
                                size="sm"
                                onClick={onCreate}
                                className="flex flex-row items-center gap-2"
                            >
                                <HiOutlinePlus className="h-4 w-4" />
                                Agregar {name.singular}
                            </Button>
                        )}
                    </div>
                </div>
                <div className="mt-3">{children}</div>
            </main>
        </Loading>
    )
}
