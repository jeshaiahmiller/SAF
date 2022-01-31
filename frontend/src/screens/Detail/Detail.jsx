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
    await createExpense(expense)
    nav(`/budget/${id}`)
  }

  if (!isLoaded) {
    return <h1>Loading...</h1>
  }
 


  return (
    <div className='detail-parent'>
      <div className='budget-detail'>
      <p id="budget-id">{budgetId.name}'s Budget</p>
      <p id="budget-id">{budgetId.title}</p>
      
      <div>
        <div className="exp-detail">
      {budgetId.expenses.map(expense => (
        <div className='expenses'>
          <p>{expense.title}</p>
          <p>{expense.value}</p>
          <button className="exp-edit-btn" onClick={() => nav(`/expense/edit/${expense.id}`)}>Edit</button>
        </div>
          ))
          }
          </div>
          </div>
      </div>
      <div className='exp-form'>
    <h3>Add an Expense!</h3>
    <form id="form" onSubmit={handleSubmit}>
      <input className="input" name="title" value={expense.title} placeholder="Title" onChange={handleChange} />
        <input className="input" name="value" value={expense.value} placeholder="Amount" onChange={handleChange} />
          <select
            className="input"
          onChange={handleChange}
          name="budget"
        >
          <option onChange={handleChange} name="budget" value="" hidden></option>
          <option onChange={handleChange} name="budget" value={budgetId.id}>{budgetId.title}</option>
        </select>
        <button className="square_btn" type="submit">Submit</button>
        </form>
        </div>
    </div>
  )
}
//left off at trying to get the input fields to change state. I got it to change state, but once the POST request goes through, the budget field is still null.