type WelcomeProps = {
    name: 'Test' | 'OK'
    count?:number
    isLoggedIn:boolean
}

function Welcome(props : WelcomeProps) {
    const {count=0} = props
    return (
        <div>
            Welcome {props.name} {count}
        </div>
    )
}

export default Welcome
