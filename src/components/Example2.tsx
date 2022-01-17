
type Example1Props = {
    children : React.ReactNode
}

function Example2(props : Example1Props) {
    return (
        <div>
            {props.children}
        </div>
    )
}

export default Example2
