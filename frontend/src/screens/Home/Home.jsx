import './Home.css'
import { useNavigate } from 'react-router-dom'

export default function Home() {


  const nav = useNavigate()

  const handleClick = () => {
    nav('/login')
  }
  const handleClick2 = () => {
    nav('/budget')
  }

  return (
  <div className='page'>
    <div className="hook">
    </div>
    <div className='text'>
      <h1>Manage your budgets Online</h1>
      <h3>SAF's quick and easy expense tracker makes budgeting smoother than ever. You don't have to worry about how much you are spending, because it's all right here! </h3>
        <button className="square_btn" onClick={handleClick}>Try Free</button>
        <div className='text-box-2'>
          <div className='text-2'>
          <h2>Dont Have an Account?</h2>
            <h4>View some budgeting examples</h4>
            </div>
          <div>
            <button className="square_btn"  id='button-2' onClick={handleClick2}>HERE</button>
          </div>
        </div>
    </div>
  </div>
  )
}
