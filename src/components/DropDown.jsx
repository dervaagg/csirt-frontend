import { Link } from "react-router-dom"

export default function DropDown() {
  return (
    <div className="dropdown">
        <div className="paste-button">
            <button className="button">Paste &nbsp; ▼</button>
            <div className="dropdown-content">
                <Link id="top" to="#">Keep source formatting</Link>
                <Link id="middle" to="#">Merge formatting</Link>
                <Link id="bottom" to="#">Keep text only</Link>
            </div>
        </div>
    </div>
  )
}
