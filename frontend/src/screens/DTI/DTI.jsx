import { useState } from 'react'
import './DTI.css'



export default function DTI() {

  const [annuIncome, setAnnuIncome] = useState('')
  const [debt, setDebt] = useState('')
  const [calculated, setCalculated] = useState('')
  const [timeFrame, setTimeFrame] = useState('')
  const [toggleDisplayResubmit, setToggleDisplayResubmit] = useState(false)
  const [toggleDisplayCalculate, setToggleDisplayCalculate] = useState(true)
  const [toggleConvert, setToggleConvert] = useState(true)

  const handleResubmit = () => {
    setToggleDisplayCalculate((curr) => !curr)
    setToggleDisplayResubmit((curr) => !curr)
      setAnnuIncome('')
      setDebt('')
      setTimeFrame('')
    setCalculated('')
    setToggleConvert(true)
  }

    if (timeFrame === "Annually" && toggleConvert) {
      setDebt(debt * 12)
      setToggleConvert(false)
    } else if(timeFrame === "Monthly" && toggleConvert) {
      setAnnuIncome(annuIncome / 12)
      setToggleConvert(false)
  } 
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const ratio = (debt / annuIncome) * 100
    setCalculated(ratio)
    setToggleDisplayCalculate((curr) => !curr)
    setToggleDisplayResubmit((curr) => !curr)
  }

  return (
<div className="dti-parent">
  <div className="dti-div">
    <form id="form"onSubmit={handleSubmit}>
        <input type="number"className="input" placeholder=" Annual Income" value={annuIncome} onChange={(e) => setAnnuIncome(e.target.value)} />
        <input type="number" className="input" placeholder="Monthly Debt" value={debt} onChange={(e) => setDebt(e.target.value)} />
        <select
          className='dti-select'
          value={timeFrame}
          placeholder='Select Time Feame'
          onChange={(e) => setTimeFrame(e.target.value)}
        >
          <option value="">Select Time Frame</option>
          <option value="Monthly">Monthly</option>
          <option value="Annually">Annually</option>
      </select>
        <button className="dti-btn" id={toggleDisplayCalculate ? "" : "display-none"}>Calculate!</button>
    </form>
        <button className="dti-btn"  id={toggleDisplayResubmit ? "" : "display-none"} onClick={handleResubmit}>ReSubmit</button>
    <div>
    </div>
      </div>
      <div className="result">
        <h3 id={toggleDisplayResubmit ? "" : "display-none"}>Your Debt to Income Ratio is {calculated}%</h3>
        </div>
</div>
  )
}