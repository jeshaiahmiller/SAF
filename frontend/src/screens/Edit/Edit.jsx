import { useState, useEffect } from "react"
import { getBudget, updateBudget, deleteBudget } from "../../services/budgets"
import { useParams, useNavigate } from "react-router-dom"
import './Edit.css'




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

  const handleDelete = async (e) => {
    e.preventDefault()
    await deleteBudget(id);
    nav("/budget");
  };


  return (
    
    <div className="form-div">
      <form id="form" onSubmit={handleSubmit}>
        <input className="input" value={budget.title} name="title" onChange={handleChange} />
        <input className="input" value={budget.name} name="name" onChange={handleChange} />
        <input className="input" value={budget.income} name="income" onChange={handleChange} />
        <button className="square_btn" type="submit">Save</button>
        <button className="square_btn" id="del-btn" onClick={handleDelete} >Delete</button>
    </form>
      
  </div>
  )
}