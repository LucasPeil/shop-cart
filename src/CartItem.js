import React from 'react'
import { useAppContext } from './Context/context'
import {FaAngleDown, FaAngleUp} from "react-icons/fa"

const CartItem = ({id,img,title,price,amount}) => {
    const {remove, toggleAmount} = useAppContext()
  return (
    <main className=" d-flex justify-content-around cart-item">
            <img src={img} alt={title}/>
            <div>
                <h4>{title}</h4>
                <h4>${price}</h4>
                <button className='remove-btn' onClick={()=>remove(id)}>remove</button>
            </div>
            
            <div>
                {/*Increase*/}
                <button className='amount-btn' onClick={()=>toggleAmount(id, "increase")}> <FaAngleUp/></button>
            </div>

                {/*Amount*/}
                <p>{amount}</p>
                {/*Decrease*/}
            <div>
            <button className='amount-btn' onClick={()=>toggleAmount(id, "decrease")}> <FaAngleDown /></button>
            </div>

    </main>
  )
}

export default CartItem