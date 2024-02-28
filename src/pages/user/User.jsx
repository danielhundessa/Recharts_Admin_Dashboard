import FullPageItem from "../../components/fullpageitem/FullPageItem"
import { singleUser } from "../../data"
import "./user.scss"

function User() {

  // Fetch data and send to FullPageItem component
  return (
    <div className="user">
      <FullPageItem {...singleUser} />
    </div>
  )
}

export default User
