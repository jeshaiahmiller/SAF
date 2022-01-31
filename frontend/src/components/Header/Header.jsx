import './Header.css'
import { Link } from 'react-router-dom'





export default function Header({user, setUser}) {


  const authOptions = (
    <>
      <Link className="link" to="/sign-out">Log Out</Link> 
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
        <Link className="link" id="saf" to="/">Save and Finance</Link>
      </div>
      <div className='links'>
        {alwaysOptions}
        {user ? authOptions : unAuthOptions}

      </div>
  </header>

  )
}
