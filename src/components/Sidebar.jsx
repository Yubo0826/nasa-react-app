import '../assets/css/Sidebar.css'
import { Link } from "react-router-dom";

const pages = [
  {
    name: 'Astronomy Picture of the Day',
    path: 'APOD'
  },
  {
    name: 'Mars Rover Photos API',
    path: 'MRPA'
  },
  {
    name: 'Mars Weather Service',
    path: 'MWS'
  },
  {
    name: 'Asteroids - NeoWs',
    path: 'Asteroids'
  }
]

export default function Sidebar() {
  const pageItems = pages.map(page => 
    <li>
      <Link to={page.path}>{page.name}</Link>
    </li>
  )

  return (
    <div>
      <ul>
        {pageItems}
      </ul>
    </div>
  )
}