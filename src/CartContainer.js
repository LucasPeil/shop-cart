import React from 'react'
import { useAppContext } from './Context/context'
import CartItem from './CartItem'
const CartContainer = () => {
    const {cart, total, clearCart} = useAppContext()
    let fixedCart = cart.filter((item)=> item.id != "recB6qcHPxb62YJ75")
    if(cart.length === 0){
        return(
            <main className='cart'>
                <h2>COMPRAS</h2>
                <h4 className='empty-cart'>No momento não há itens na sua lista de compras</h4>
            </main>
        )
    }
  return (
    <main className='cart'>
        <header>
            <h2>COMPRAS</h2>
        </header>
         <div>
            {fixedCart.map((item)=>{
                return <CartItem key={item.id} {...item}/>
            })}
         </div>

         <footer>
            <hr/>
            <div className='cart-total'>
                <h4>Total <span>{total}</span> </h4>
            </div>
            <button className='btn-clear' onClick={clearCart}>Clear Cart</button>
         </footer>
    </main>
  )
}

export default CartContainer