import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [val1, setVal1] = useState("")
    const [val2, setVal2] = useState("")

    useEffect(() => {
        console.log(`Message1 ${val1}`)
    }, [val1])

    useEffect(() => {
        console.log(`Message2 ${val2}`)
    }, [val1,val2])

    return(
        <>
          <label className="box1">
              Message1
              <input
                value={val1}
                onChange={e => setVal1(e.target.value)} 
              />
          </label>
          <label className="box2">
              Message2
              <input
                value={val2}
                onChange={e => setVal2(e.target.value)} 
              />
          </label>
        </>
    )
}

export default Effect