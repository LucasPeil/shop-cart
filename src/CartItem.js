import React from 'react'
import { useAppContext } from './Context/context'

const CartItem = ({id,img,title,price,amount}) => {
    const {remove, toggleAmount} = useAppContext()
  return (
    <main className="car-item">
            <img src={img} alt={title}/>
            <div>
                <h4>{title}</h4>
                <h4>${price}</h4>
                <button onClick={()=>remove(id)}>remove</button>
            </div>
            
            <div>
                {/*Increase*/}
                <button onClick={toggleAmount(id, "increase")}> <FontAwesomeIcon icon="fa-solid fa-angle-up" /></button>
            </div>

                {/*Amount*/}
                <p>{amount}</p>
                {/*Decrease*/}
            <div>
            <button onClick={toggleAmount(id, "decrease")}> <FontAwesomeIcon icon="fa-solid fa-angle-down" /></button>
            </div>

    </main>
  )
}

export default CartItem