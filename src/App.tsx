import { useState } from 'react'
import './App.css'

function App() {
  const [response, setResponse] = useState('')

  const handleButtonClick = async (url: string, method: string) => {
    try {
      const options = {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const res = await fetch(url, options)
      const data = await res.json()
      setResponse(JSON.stringify(data))
    } catch (error) {
      if (error instanceof Error) {
        setResponse('Error: ' + error.message)
      } else {
        setResponse('An unknown error occurred')
      }
    }
  }

  return (
    <div className="container">
      <h1>API Request Buttons</h1>
      <div className="button-group">
        <button onClick={() => handleButtonClick('https://fastapi-production-3895.up.railway.app/monitor/status', 'GET')}>
          GET Status
        </button>
        <button onClick={() => handleButtonClick('https://fastapi-production-3895.up.railway.app/monitor/create', 'POST')}>
          POST Create
        </button>
        <button onClick={() => handleButtonClick('https://fastapi-production-3895.up.railway.app/monitor/stop', 'POST')}>
          POST Stop
        </button>
      </div>
      <div className="response">
        <p>Response: {response}</p>
      </div>
    </div>
  )
}

export default App
