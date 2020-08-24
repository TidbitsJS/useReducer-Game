import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

const LifecycleDemo = () => {
    useEffect(() => {
        console.log('render!')

        return () => console.log('Unmounting')
    })

    return "Lifecycle Demo"
}

const Example = () => {
    const [random, setRandom] = useState(Math.random())
    const [mounted, setMounted] = useState(true)

    const reRender = () => setRandom(Math.random())
    const toggle = () => setMounted(!mounted)

    return(
        <div className="example">
            <div>
                <Button onClick={reRender} style={{margin: 10}}>Re-render</Button>
                <Button onClick={toggle}>Show/Hide</Button>
            </div>
            <div>
                { mounted && <LifecycleDemo /> }
            </div>
        </div>
    )
}

export default Example