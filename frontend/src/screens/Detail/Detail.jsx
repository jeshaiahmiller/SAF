import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getBudget } from "../../services/budgets"
import {getExpenses} from '../../services/expenses'


export default function Detail() {

  const [budgetId, setBudgetId] = useState({})
  const [isLoaded, setLoaded] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const fetchProduct = async () => {
      const budget = await getBudget(id)
      setBudgetId(budget)
      setLoaded(true)
      console.log(budget)
    }
    fetchProduct()
  }, [id])




  if (!isLoaded) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <p>{budgetId.title}</p>
      <p>{budgetId.name}</p>
      {budgetId.expenses.map(expense => (
        <div>
          <p>{expense.title}</p>
          <p>{expense.value}</p>
        </div>
          ))
        }
    


  </div>
  )
}