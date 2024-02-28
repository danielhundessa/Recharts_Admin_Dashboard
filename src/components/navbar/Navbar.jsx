import { Tooltip } from "recharts"
import "./navbar.scss"

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/logo.svg" alt="" />
        <span>Sample Admin Dashboard</span>
      </div>
      <div className="links">
        {/* <img src="/search.svg" alt="" className="link" /> */}
        <div className="notification">
            <img src="/notifications.svg" alt="" />
            <span>1</span>
        </div>
        <div className="user">
            <img
                src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                alt=""
            />
            <span>Jane</span>
        </div>
        {/* <img src="/settings.svg" alt="" className="link" /> */}
      </div>
    </div>
  )
}

export default Navbar