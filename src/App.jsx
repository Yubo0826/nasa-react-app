import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import Sidebar from './components/Sidebar'
import { Outlet } from "react-router-dom"

function App() {
  const NASA_API_KEY = import.meta.env.VITE_NASA_API_KEY
  const [count, setCount] = useState(0)
  const [APOD_url, setAPOD] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      console.log(NASA_API_KEY)
      const url = 'https://api.nasa.gov/planetary/apod?' + `api_key=${NASA_API_KEY}`
      axios.get(url)
        .then(response => {
          console.log(response.data)
          setAPOD(response.data.url)
        })

    }

    fetchData()
  })

  return (
    <>
      <div className='grid'>
        <Sidebar />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default App
