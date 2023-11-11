import React, { useState } from 'react'

export default function Count() {

    const [count, setCount] = useState(0);
    const handleDecrement = () => {
        setCount((oldCount) => oldCount - 1);
    }
    const handleReset = () => {
        setCount(0);
    }
    const handleIncrement = () => {
        setCount((oldCount) => oldCount + 1);
    }

  return (
    <div className='content'>
        <div className="app_title">
            <h1>Counter App</h1>
        </div>
        <div className="main_content">
            <h2>Count : <span>{count}</span></h2>
            <div className="btn_area">
                <button disabled={count <= -5 ? true : false} onClick={handleDecrement}><span>-</span></button>
                <button disabled={count == 0 ? true : false} onClick={handleReset}><span>0</span></button>
                <button disabled={count >= 5 ? true : false} onClick={handleIncrement}><span>+</span></button>
            </div>
        </div>
    </div>
  )
}
