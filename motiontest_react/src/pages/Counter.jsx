import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    
    <div className="flex flex-col gap-5 w-64">
        <h1 className="text-2xl font-bold">Counter</h1>
        <div className="flex flex-col gap-3 justify-center items-center">
            <div className="w-full bg-white border rounded text-2xl p-3">{count}</div>
            <button className="w-full bg-blue-400 border rounded text-white text-2xl font-bold p-3" onClick={() => setCount((count) => count + 1)}>
            +
            </button>
        </div>
    </div>
  )
}

export default Counter;
