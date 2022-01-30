import './Header.css'
import {Link } from 'react-router-dom'

export default function Header() {





  return(
    <header>
    <div>
      <div>
        <h1>SAF</h1>
      </div>
          <div>
            <Link to="/create">Create</Link>
            <Link to='/DTI'>DTI Ratio</Link> 
          </div>
        </div>
  </header>

  )
}
