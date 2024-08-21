import { useState, useEffect } from 'react'
import axios from 'axios'

function APOD() {
  const NASA_API_KEY = import.meta.env.VITE_NASA_API_KEY
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
    <div>
      {APOD_url}
      <img src={APOD_url} alt="" />
    </div>
  )
}

export default APOD
