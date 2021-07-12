import React, {useState} from "react"
import {Link, Redirect} from "react-router-dom"

const SingleApartmentCard = ({product}) => {
    const [redirect, setRedirect] = useState(false);

    // const showAddToCartButton = () => {
    //     return(<button onClick={addToCart} className="btn btn-outline-warning mt-2 mb-2 btn-login">
    //     Add to cart
    // </button>)
    // }

    // const addToCart = () => {
    //     addItem(product, () => {
    //         setRedirect(true);
    //     })
    // }

    const shouldRedirect = redirect => {
        if(redirect){
            return <Redirect to="/cart" />
        }
    }

    return(
        <div className="card">
            <div className="card-header singleProductName">
                {/* {product.name} */}
            </div>
            <div className="card-body row">
                <div className="col-6">
                    {shouldRedirect(redirect)}
                </div>
                <div className="col-4">
                <label>Description:</label>
                {/* <p>{product.description.substring(0,100)}</p> */}
                <label>Price:</label>
                {/* <p>${product.price}</p> */}
                {/* <p>Category: {product.category && product.category.name}</p> */}
                {/* <p>Added on {moment(product.createdAt).fromNow()}</p> */}
                <br></br>
                <p>Transport price: Free</p>
                <br/>
                {/* {showAddToCartButton()} */}
                </div>
            </div>
        </div>
    )
}

export default SingleApartmentCard;