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
    <div>
      <h1> All Budgets</h1>
      {budgets.map(budget => (
            <div>
          <BudgetPreview
            id={budget.id}
            title={budget.title}
            name={budget.name}
          />
            </div>
          ))
        }
      
    </div>
  )
}
