import { useState, useEffect } from "react"
import { getBudget, updateBudget } from "../../services/budgets"
import { useParams, useNavigate } from "react-router-dom"




export default function Edit() {


  const [budget, setBudget] = useState({
    title: "",
    name: "",
    income: "",
    expenses: []
  })
  const { id } = useParams()
  const nav = useNavigate()


  useEffect(() => {
    const fetchBudget = async () => {
      const budget = await getBudget(id)
      setBudget(budget)
    }
    fetchBudget()
  }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBudget({
      ...budget,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateBudget(id, budget);
    nav(`/budget/${id}`);
  };

  return (
    
    <div>
      <form onSubmit={handleSubmit}>
        <input value={budget.title} name="title" onChange={handleChange} />
        <input value={budget.name} name="name" onChange={handleChange} />
        <input value={budget.income} name="income" onChange={handleChange} />
        <button type="submit">Submit</button>

    </form>
      
  </div>
  )
}