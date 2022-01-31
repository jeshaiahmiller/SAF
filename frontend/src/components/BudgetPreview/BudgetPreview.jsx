import { Link } from "react-router-dom";
import "./BudgetPreview.css";
export default function BudgetPreview(props) {
  return (
    <div className="items">
      <div className="bud-title">
        <h3>{props.title}</h3>
      </div>
      <div className="bud-name">
        <h5>{props.name}</h5>
      </div>
      <Link className="view" to={`/budget/${props.id}`}>
        <h3>View</h3>
      </Link>
    </div>
  );
}
