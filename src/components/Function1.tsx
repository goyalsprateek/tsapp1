import React from 'react'

type Function1Props = {
    handler : (event:React.MouseEvent<HTMLButtonElement>) => void
    styles : React.CSSProperties
}

function Function1({handler,styles}:Function1Props) {
    
    return (
        <div style={styles}>
            <h2>Hellooo</h2>
            <button onClick={(event)=>handler(event)} >Test ME</button>
        </div>
    )
}

export default Function1
