import { useState } from 'react'
import Search from './components/Search'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>GitHub User Search</h1>
      <Search />
    </div>
  )
}

export default App
