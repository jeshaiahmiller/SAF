import { useState, useEffect } from "react"
import { getExpense, updateExpense, deleteExpense } from "../../services/expenses"
import { useParams } from "react-router-dom"
import './Edit.css'

export default function EditExp() {


  const [expense, setExpense] = useState({
    title: '',
    value: '',
    budget: ''
  })
  const { id } = useParams()
  // const nav = useNavigate()

  useEffect(() => {
    const fetchExpense = async () => {
      const expense = await getExpense(id)
      setExpense(expense)

    }
    fetchExpense()
  }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense({
      ...expense,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateExpense(id, expense);
    window.history.back()
  };

  const handleDelete = async (e) => {
    e.preventDefault()
    await deleteExpense(id);
    window.history.back()
  };




  return (
<div className="form-div">
      <form id="form" onSubmit={handleSubmit}>
        <input className="input" value={expense.title} name="title" onChange={handleChange} />
        <input className="input" value={expense.value} name="value" onChange={handleChange} />
        <button className="square_btn" type="submit">Save</button>
        <button className="square_btn" id="del-btn" onClick={handleDelete} >Delete</button>
    </form>
      
  </div>
  )
}
