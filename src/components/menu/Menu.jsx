import "./menu.scss"
import { Link } from "react-router-dom"
import { menu } from "../../data.js"

function Menu() {
  return (
    <div className="menu">
      {menu.map((item) => (
        <div className="item" key={item.id}>
          <span className="title">{item.title}</span>
          {item.listItems.map((listItem) => (
            <Link to={listItem.url} className="list-item" key={listItem.id}>
              <img src={listItem.icon} alt="" />
              <span className="list-item-title">{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Menu