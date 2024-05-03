import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ShoppingCart from './pages/ShoppingCart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ShoppingCart />
    </>
  )
}

export default App
