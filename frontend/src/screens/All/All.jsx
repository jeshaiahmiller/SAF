import '../All/All.css'
import { useEffect, useState } from 'react'
import { getBudgets } from '../../services/budgets'

export default function All() {


  const [budgets, setBudgets] = useState([])

  useEffect(() => {
    const fetchBudgets = async () => {
      const allBudgets = await getBudgets()
      setBudgets(allBudgets)
      console.log('hello')
    }
    fetchBudgets()
    
  }, [])



  return (
    <div>
      {budgets.map(budget => (
            <div>
              <p>{budget.title}</p>
            </div>
          ))
        }
      <h1> hello</h1>
    </div>
  )
}
