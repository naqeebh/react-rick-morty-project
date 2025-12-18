import { useState } from 'react'
import './App.css'

function App(): JSX.Element {
  const [count, setCount] = useState<number>(0)

  return (
    <div className="max-w-4xl mx-auto mt-6">
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={() => setCount(prev => prev + 1)}
      >
        Click me
      </button>
      <p className="text-5xl bg-amber-400">
        Count: {count}
      </p>
    </div>
  )
}

export default App
