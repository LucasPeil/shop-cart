import React from 'react'
import { useAppContext } from './Context/context'
import CartItem from './CartItem'
const CartContainer = () => {
    const {cart, total, clearCart} = useAppContext()
    if(cart.length === 0){
        return(
            <main>
                <h2>COMPRAS</h2>
                <h4>No momento não há itens na sua lista de compras</h4>
            </main>
        )
    }
  return (
    <main>
        <header>
            <h2>COMPRAS</h2>
        </header>
         <div>
            {cart.map((item)=>{
                return <CartItem key={item.id} {...item}/>
            })}
         </div>

         <footer>
            <hr/>
            <div>
                <h4>total <span>{total}</span> </h4>
            </div>
            <button onClick={clearCart}>Clear Cart</button>
         </footer>
    </main>
  )
}

export default CartContainer