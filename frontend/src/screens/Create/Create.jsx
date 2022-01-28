import {useState} from 'react'
import { createBudget } from '../../services/budgets'
import {useNavigate} from 'react-router-dom'

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
    await createBudget()
    nav('/all')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={budget.title} placeholder="title" onChange={handleChange} />
      <input name="name" value={budget.name} placeholder="name" onChange={handleChange} />
      <input name="income" value={budget.income} placeholder="income" onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  )
}
