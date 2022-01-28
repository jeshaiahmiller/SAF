import {Link} from 'react-router-dom'

export default function BudgetPreview(props) {



  return (
    <div>
    <Link to={`/budget/${props.id}`}>
      <h3>{props.title}</h3>
      <h5>{props.name}</h5>
    </Link>
</div >
  )
}
