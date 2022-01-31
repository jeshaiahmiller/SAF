import {useState} from 'react'
import { createBudget } from '../../services/budgets'
import { useNavigate } from 'react-router-dom'
import  './Create.css'

export default function Create() {

  const nav = useNavigate()
  const [budget, setBudget] = useState({
    title: '',
    name: '',
    income: '',
    expenses: [],
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setBudget({
      ...budget,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await createBudget(budget)
    nav('/budget')
  }

  return (
  <div className="form-div">
    <form id="form" onSubmit={handleSubmit}>
      <input name="title" className="input" value={budget.title} placeholder="Title" onChange={handleChange} />
      <input name="name" className="input" value={budget.name} placeholder="Name" onChange={handleChange} />
      <input name="income" className="input" value={budget.income} placeholder="Income" onChange={handleChange} />
      <button className="square_btn" type="submit">Submit</button>
    </form>
  </div>
  )
}
