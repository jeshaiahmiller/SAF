import './Header.css'
import { Link, useNavigate } from 'react-router-dom'
import { logOut } from '../../services/users'

export default function Header({loggedIn, setLoggedIn}) {


  const nav = useNavigate()
  

  const handleClick = () => {
    nav('/')
  }
  const handleLogOut = async () => {
    await logOut()
    setLoggedIn(false)
    nav('/')
  }

  return(
    <header>
      <div  id="title">
        <h1 onClick={handleClick}>Save and Finance</h1>
      </div>
      <div className='links'>
        <Link className="link" to="/create">Create </Link>
        <Link className="link" to='/DTI'>DTI Ratio</Link> 
        {/* {loggedIn === false && */}
          {/* <Link className="link" to='login'>Log In</Link> */}
        {/* } */}
        {/* {loggedIn && */}
        <h5 className="log-out" onClick={handleLogOut}>Log Out</h5> 
        {/* } */}
      </div>
  </header>

  )
}
