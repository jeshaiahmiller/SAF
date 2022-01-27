import '../All/All.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function All() {


  const [budgets, setBudgets] = useState([])

  useEffect(() => {
    const fetchBudgets = async () => {
      const allBudgets = await axios.get('http://127.0.0.1:8000')
      setBudgets(allBudgets)
      console.log(allBudgets)
    }
    fetchBudgets()
    
  }, [])



  return (
    <div>
      <h1> hello</h1>
    </div>
  )
}
