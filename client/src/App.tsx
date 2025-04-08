import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() 
{
  //const [count, setCount] = useState(0)

  const [msg, setmsg] =useState("");

  //useEffect (default and best for side-effects)
  // Recommended for:Fetching on mount React lifecycle consistency
  useEffect(() => {
    async function load()
    {
      const res = await fetch("/api/test");
      if (!res.ok)
      {
        throw new Error(`fetch error ${res.status}`)
      }

      //const text = await res.json();
      // we are having error when using .json() with plain text
      // because .json() tries to parse the response as JSON (expects something like {"message": "hello world"})
      // But it sees "H" (from Hello world) and throws SyntaxError: Unexpected token H in JSON at position 0
      // If your server is sending plain text (res.send("hello world")), use .text() instead:
      //If you want to stick with res.json() in the frontend, then your backend needs to send valid JSON, like this:
      //res.json({ message: "hello world" }); // valid JSON
      const text = await res.text();
      console.log(text);
      setmsg(text);
    }
   
    load();
  }, [])



  return (
    <>
      <h2 className='text-2xl underline font-bold'>Im using tailwind</h2>
      <h1>{msg}</h1>
    </>
  )
}

export default App
