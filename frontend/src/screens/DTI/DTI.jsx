import { useState } from "react";
import "./DTI.css";

export default function DTI() {
  const [annuIncome, setAnnuIncome] = useState("");
  const [debt, setDebt] = useState("");
  const [calculated, setCalculated] = useState("");
  const [timeFrame, setTimeFrame] = useState("");
  const [toggleDisplayResubmit, setToggleDisplayResubmit] = useState(false);
  const [toggleDisplayCalculate, setToggleDisplayCalculate] = useState(true);
  const [toggleConvert, setToggleConvert] = useState(true);
  const [good, setGood] = useState(false)
  const [bad, setBad] = useState(false)
  const [ugly, setUgly] = useState(false)

  const handleResubmit = () => {
    setToggleDisplayCalculate((curr) => !curr);
    setToggleDisplayResubmit((curr) => !curr);
    setAnnuIncome("");
    setDebt("");
    setTimeFrame("");
    setCalculated("");
    setToggleConvert(true);
    setGood(false)
    setBad(false)
    setUgly(false)
  };

  if (timeFrame === "Annually" && toggleConvert) {
    setDebt(debt * 12);
    setToggleConvert(false);
  } else if (timeFrame === "Monthly" && toggleConvert) {
    setAnnuIncome(annuIncome / 12);
    setToggleConvert(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const ratio = (debt / annuIncome) * 100;
    setCalculated(ratio);
    setToggleDisplayCalculate((curr) => !curr);
    setToggleDisplayResubmit((curr) => !curr);
    if (ratio <= 35) {
      setGood(true)
    } else if (ratio > 35 && ratio <= 49) {
      setBad(true)
    } else if (ratio > 50) {
      setUgly(true)
    } 
    if (ratio > 100) {
      setCalculated(100)
    }
  };


  return (
    <div className="dti-parent">
      <div className="dti-div">
        <form id="form" onSubmit={handleSubmit}>
          <input
            type="number"
            className="input"
            placeholder=" Annual Income"
            value={annuIncome}
            onChange={(e) => setAnnuIncome(e.target.value)}
          />
          <input
            type="number"
            className="input"
            placeholder="Monthly Debt"
            value={debt}
            onChange={(e) => setDebt(e.target.value)}
          />
          <select
            className="dti-select"
            value={timeFrame}
            placeholder="Select Time Feame"
            onChange={(e) => setTimeFrame(e.target.value)}
          >
            <option value="">Select Time Frame</option>
            <option value="Monthly">Monthly</option>
            <option value="Annually">Annually</option>
          </select>
          <button
            className="dti-btn"
            id={toggleDisplayCalculate ? "" : "display-none"}
          >
            Calculate!
          </button>
        </form>
        <button
          className="dti-btn"
          id={toggleDisplayResubmit ? "" : "display-none"}
          onClick={handleResubmit}
        >
          ReSubmit
        </button>
        <div></div>
      </div>
      <div className="result">
        <h1 id={toggleDisplayResubmit ? "" : "display-none"}>
          Your Debt to Income Ratio is {calculated}%</h1>
        {good ? 
          <>
          <h3 id="good">You're in a good spot!</h3>
            <p>Your debt is at a manageable state! You more than likely have money left over after your debts are paid. Keep up the good work!!</p>
          </> :
          null 
        }
        {bad ? 
          <>
            <h3 id="bad">There's room for improvement!</h3>
            <p>You are managing your debt well, but you can and should imporve! Try lowering your monthly expenses. This will positively affect your DTI ratio, and will put you in a better spot financially</p>
          </>
          : null
        }
        {ugly ? 
          <>
            <h3 id="ugly">Take Action!!</h3>
            <p>Your money after bills and taxes is in a bad spot! Ypu likely have little to no money left over for other expenses or savings. It will be wise to act fast, so your DTI doesn't get worse. With this ratio, banks and lenders may restrict your borrowing options. Try removing some forms of debt, or find ways to make more money!!</p>
          </>
          : null
      }
      </div>
    </div>
  );
}
