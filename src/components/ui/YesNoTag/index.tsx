interface YesNoTagProps {
    active: boolean
}

export default function YesNoTag(props: YesNoTagProps) {
    const color = props.active ? 'green' : 'red'
    return (
        <div className={`text-${color}-600 flex flex-row items-center gap-2`}>
            <div className={`bg-${color}-600 h-2 w-2 rounded-full`}></div>
            {props.active ? 'Sí' : 'No'}
        </div>
    )
}
