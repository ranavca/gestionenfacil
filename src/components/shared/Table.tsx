import TableUi from '@/components/ui/Table'
import { ReactNode } from 'react'
const { Tr, Th, Td, THead, TBody } = TableUi

interface TableProps {
    header: ReactNode[]
    body: ReactNode[][]
}

export default function Table(props: TableProps) {
    const { header, body } = props
    return (
        <TableUi className="mt-3">
            <THead>
                <Tr>
                    {header.map((content) => (
                        <Th key={content?.toString()}>{content}</Th>
                    ))}
                </Tr>
            </THead>
            <TBody>
                {body.map((upperLevel) => (
                    <Tr key={upperLevel?.toString()}>
                        {upperLevel.map((lowerLevel) => (
                            <Td key={lowerLevel?.toString()}>{lowerLevel}</Td>
                        ))}
                    </Tr>
                ))}
            </TBody>
        </TableUi>
    )
}
