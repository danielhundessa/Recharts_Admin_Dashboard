import FullPageItem from "../../components/fullpageitem/FullPageItem"
import { singleProduct } from "../../data"
import "./product.scss"

function Product() {

    // Fetch data and send to FullPageItem component
    return (
        <div className="product">
            <FullPageItem {...singleProduct} />
        </div>
    )
}

export default Product
