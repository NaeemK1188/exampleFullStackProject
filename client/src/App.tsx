import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() 
{
  //const [count, setCount] = useState(0)

  const [msg, setmsg] =useState("");

  useEffect(() => {
    

  }, [])



  return (
    <>
      <h2 className='text-2xl underline font-bold'>Im using tailwind</h2>
    </>
  )
}

export default App
