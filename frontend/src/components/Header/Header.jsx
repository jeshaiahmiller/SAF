import './Header.css'
import { Link, useNavigate } from 'react-router-dom'
import { logOut } from '../../services/users'




export default function Header({user, setLoggedIn}) {


  const nav = useNavigate()
  

  const handleClick = () => {
    nav('/')
  }
  const handleLogOut = async () => {
    await logOut()
    setLoggedIn(null)
    nav('/')
  }

  const authOptions = (
    <>
      <h5 className="log-out" onClick={handleLogOut}>Log Out</h5> 
    </>
  )
  const unAuthOptions = (
    <>
      <Link className="link" to='login'>Log In</Link>
    </>
  )
  const alwaysOptions = (
    <>
        <Link className="link" to="/create">Create</Link>
        <Link className="link" to='/DTI'>DTI Ratio</Link> 
    </>
  )


  return(
    <header>
      <div  id="title">
        <h1 onClick={handleClick}>Save and Finance</h1>
      </div>
      <div className='links'>
        {alwaysOptions}
        {user ? authOptions : unAuthOptions}
      </div>
  </header>

  )
}
