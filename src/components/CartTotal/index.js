import {Link} from 'react-router-dom'
import {BiRupee} from 'react-icons/bi'

import CartContext from '../../context/CartContext'

import './index.css'

const CartTotal = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let totalOrderCost = 0
      cartList.forEach(eachCartItem => {
        totalOrderCost += eachCartItem.cost * eachCartItem.quantity
      })

      return (
        <>
          <hr className="cart-hr-line" />
          <div
            className="cart-summary-container"
            // eslint-disable-next-line react/no-unknown-property
            testid="total-price"
          >
            <div className="total-container">
              <h1 className="order-total-value">Order Total: </h1>
              <div className="total-price-container">
                <BiRupee size={25} />
                <p
                  className="total-cost"
                  // eslint-disable-next-line react/no-unknown-property
                  testid="total-price"
                >
                  {totalOrderCost}
                </p>
              </div>
            </div>
            <Link to="/payment" className="place-order-container">
              <button type="button" className="place-order-button">
                Place Order
              </button>
            </Link>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartTotal
