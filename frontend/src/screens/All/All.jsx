import '../All/All.css'
import { useEffect, useState } from 'react'
import { getBudgets } from '../../services/budgets'
import BudgetPreview from '../../components/BudgetPreview/BudgetPreview'

export default function All() {


  const [budgets, setBudgets] = useState([])

  useEffect(() => {
    const fetchBudgets = async () => {
      const allBudgets = await getBudgets()
      setBudgets(allBudgets)
      console.log(allBudgets)
    }
    fetchBudgets()
    
  }, [])



  return (
  <div className='parent'>
      <h1>All Budgets</h1>
      <div className='header'>
        <div className='head-title'>
          <h3>TITLE</h3>
        </div>
        <div className='head-name'>
          <h3>NAME</h3>
          </div>
      </div>
    <table>
      {budgets.map(budget => (
        <div className='map'>
          <BudgetPreview
            id={budget.id}
            title={budget.title}
            name={budget.name}
          />
            </div>
          ))
          }

    </table>
  </div>

  )
}
