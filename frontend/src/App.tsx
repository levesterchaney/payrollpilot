import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>PayrollPilot</h1>
        <p>Payroll Management System</p>
      </header>
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}

function Home() {
  return (
    <div>
      <h2>Welcome to PayrollPilot</h2>
      <p>Your comprehensive payroll management solution.</p>
    </div>
  )
}

export default App