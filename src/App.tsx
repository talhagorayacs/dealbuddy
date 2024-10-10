import { useState } from 'react'
import SignIn from './components/sign-up'
import './App.css'
import LoginComponent from './components/sign-in'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <SignIn/> */}
      <LoginComponent/>
    </>
  )
}

export default App
