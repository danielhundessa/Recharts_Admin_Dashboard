import "./topbox.scss"
import { topDealUsers } from "../../data.js"

function TopBox() {
  return (
    <div className="topbox">
        <h1>Top Users</h1>
        <div className="list">
            {topDealUsers.map((user) => (
                <div className="list-item" key={user.id}>
                    <div className="user">
                        <img src={user.img} alt="" />
                        <div className="user-texts">
                            <span className="username">{user.username}</span>
                            <span className="email">{user.email}</span>
                        </div>
                    </div>
                    <span className="amount">${user.amount}</span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default TopBox
