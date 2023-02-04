import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'
import {FaRupeeSign} from 'react-icons/fa'
import CartContext from '../../context/CartContext'

import './index.css'

const CartItem = props => (
  <CartContext.Consumer>
    {value => {
      const {deleteCartItem, addQuantity, decreaseQuantity} = value
      const {cartItemDetails} = props
      const {id, name, quantity, cost, imageUrl} = cartItemDetails
      const onDeleteCartItem = () => {
        deleteCartItem(id)
      }
      const onAddQuantity = () => {
        addQuantity(id)
      }
      const onDecreaseQuantity = () => {
        decreaseQuantity(id)
      }
      return (
        // eslint-disable-next-line react/no-unknown-property
        <li className="cart-item" testid="cartItem">
          <div
            className="cart-item-lg-view"
            // eslint-disable-next-line react/no-unknown-property
            testid="cartItem"
          >
            <img className="cart-product-image" src={imageUrl} alt={name} />
            <h1 className="cart-product-lg-title">{name}</h1>
          </div>
          <div
            className="cart-item-details-container"
            // eslint-disable-next-line react/no-unknown-property
            testid="cartItem"
          >
            <div
              className="cart-quantity-container"
              // eslint-disable-next-line react/jsx-no-duplicate-props
              className="cart-quantity-container"
            >
              <button
                // eslint-disable-next-line react/no-unknown-property
                testid="decrement-quantity"
                onClick={onDecreaseQuantity}
                type="button"
                className="cart-item-controller-button"
              >
                <BsDashSquare color="#52606D" size={16} />
              </button>
              <p
                className="cart-quantity"
                // eslint-disable-next-line react/no-unknown-property
                testid="item-quantity"
              >
                {quantity}
              </p>
              <button
                // eslint-disable-next-line react/no-unknown-property
                testid="increment-quantity"
                onClick={onAddQuantity}
                type="button"
                className="cart-item-controller-button"
              >
                <BsPlusSquare color="#52606D" size={16} />
              </button>
            </div>
            <div
              className="total-price-delete-container"
              // eslint-disable-next-line react/no-unknown-property
              testid="cartItem"
            >
              <p className="cart-total-price">
                <FaRupeeSign /> {cost * quantity}.00
              </p>
            </div>
          </div>

          <div
            className="cart-quantity-lg-container"
            // eslint-disable-next-line react/no-unknown-property
            testid="cartItem"
          >
            <button
              // eslint-disable-next-line react/no-unknown-property
              testid="decrement-quantity"
              onClick={onDecreaseQuantity}
              type="button"
              className="cart-item-controller-button"
            >
              <BsDashSquare color="#52606D" size={16} />
            </button>
            <p
              className="cart-quantity"
              // eslint-disable-next-line react/no-unknown-property
              testid="item-quantity"
            >
              {quantity}
            </p>
            <button
              // eslint-disable-next-line react/no-unknown-property
              testid="increment-quantity"
              onClick={onAddQuantity}
              type="button"
              className="cart-item-controller-button"
            >
              <BsPlusSquare color="#52606D" size={16} />
            </button>
          </div>
          <div
            className="total-price-lg-delete-container"
            // eslint-disable-next-line react/no-unknown-property
            testid="cartItem"
          >
            <p className="cart-total-price">
              <FaRupeeSign /> {cost * quantity}.00
            </p>
          </div>

          <button
            className="delete-button"
            type="button"
            onClick={onDeleteCartItem}
          >
            <AiFillCloseCircle color="#616E7C" size={20} />
          </button>
        </li>
      )
    }}
  </CartContext.Consumer>
)

export default CartItem
