
type Example1Props = {
    children : string
}

function Example1(props : Example1Props) {
    return (
        <div>
            {props.children}
        </div>
    )
}

export default Example1
