import './Detail.css'
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getBudget } from "../../services/budgets"
import { createExpense } from "../../services/expenses"



export default function Detail() {

  const [budgetId, setBudgetId] = useState({})
  const [expense, setExpense] = useState({
    title: '',
    value: '',
    budget: '',
  })
  
  const [isLoaded, setLoaded] = useState(false)
  const { id } = useParams()
  const nav = useNavigate()

  useEffect(() => {
    const fetchProduct = async () => {
      const budget = await getBudget(id)
      setBudgetId(budget)
      setLoaded(true)
      console.log(budget)
    }
    fetchProduct()
  }, [id])



  const handleChange = (event) => {
    const { name, value } = event.target
    setExpense({
      ...expense,
      [name]: value,
    })
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    await createExpense(expense)
    nav('/budget')
  }

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
    <h3>Add an Expense!</h3>
    <form onSubmit={handleSubmit}>
      <input name="title" value={expense.title} placeholder="Title" onChange={handleChange} />
        <input name="value" value={expense.value} placeholder="Amount" onChange={handleChange} />
        <input value={expense.budget} name="budget" placeholder="Budget Number" onChange={handleChange}/>
        <button type="submit">Submit</button>
        {/* <select
          value={expense.budget}
          onChange={handleChange}
          name="budget"
        >
          <option onChange={handleChange} name="budget" value={expense.budget}>{budgetId.title}</option>
        </select> */}
    </form>
    </div>
  )
}
//left off at trying to get the input fields to change state. I got it to change state, but once the POST request goes through, the budget field is still null.