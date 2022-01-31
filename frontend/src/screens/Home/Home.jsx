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
  const handleClick3 = () => {
    nav('/DTI')
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
        <div className='text-box-3'>
          <div className="text-3">
          <h3>Want to Check Your DTI?</h3>
            <h4>Our advance Debt-to-Income calculator will let you know how much your debt is eating away at your money!</h4>
          </div>
          <div>
            <button className="square_btn" id="button-3" onClick={handleClick3}>Check my DTI</button>
            </div>
        </div>
    </div>
  </div>
  )
}
