

const reducer = (state, action) =>{
    switch (action.type){
        case "CLEAR_CART":
            return {...state, cart:[]};
        case "REMOVE":
            return{...state, cart: state.cart.filter((item)=> item.id !== action.payload)}
        case "INCREASE":
            let tempCartIncrease = state.cart.map((item)=>{
                if (item.id === action.payload){
                    return {...item, counter: item.counter +1}
                }
                return item
            })
            return {...state, cart: tempCartIncrease};

        case "DECREASE":
            let tempCartDecrease = state.cart.map((item)=>{
                if (item.id === action.payload){
                    return {...item, counter: item.counter - 1}
                }
                return item
            });
            return {...state, cart:tempCartDecrease};

        case "TOTALS":
            let {total, amount} = state.cart.reduce((cartTotal, cartItem)=>{
                let{amount, price} = cartItem;
                const itemTotal = amount * price
                cartTotal.total += itemTotal;
                cartTotal.amount = amount
                return cartTotal

            },
            {
                total:0,
                amount:0
            })

            total = parseFloat(total.toFixed(2))

            return {...state, total,amount};

        case "LOADING":
            return {...state, loading:true};

        case "DISPLAY_ITEMS":
            return {...state, cart: action.payload, loading:false};

        case "TOGGLE_AMOUNT":
            let tempCartToggle = state.cart
                .map((item)=>{
                    if(item.id === action.payload.id){
                        if(action.payload.type==="increase"){
                            return {item, amount: item.amount +1}
                        }
                        if(action.payload.type === "decrease"){
                            return {...item, amount: item.amount-1}
                        }
                    }
                    return item
                })
                .filter((item)=> item.amount !== 0)

                return {...state, cart: tempCartToggle}
    }
    throw new Error("Sorry, we didn't find the correct action type")
}

export default reducer
