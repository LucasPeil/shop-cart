import {createContext, useReducer, useContext, useEffect} from "react"
import reducer from "../Reducer/reducer"
import cartItems  from "../Utils/data"
const url = "https://course-api.com/react-useReducer-cart-project"

const AppContext = createContext();

const initialState = {
    loading: false,
    cart: cartItems,
    amount: 0,
    total:0,
    message: null
}

 const AppContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer,initialState);

    const clearCart = ()=>{
        dispatch({type: "CLEAR_CART"})
    }
    const decrease = (id)=>{
        dispatch({type: "DECREASE", payload: id})
    }
    const increase = (id)=>{
        dispatch({type: "INCREASE", payload: id})
    }
    const fetchData = async ()=>{
        dispatch({type:"LOADING"})
        const cartItem = await fetch(url).then((res)=> res.json())
        dispatch({type: "DISPLAY_ITEMS", payload: cartItem})  
    }
    const toggleAmount = (id, type)=>{
        dispatch({type: "TOGGLE_AMOUNT", payload: {id,type}})
    }
    const remove = (id)=>{
        dispatch({type:"REMOVE", payload:id})
    }
    useEffect(()=>{
        fetchData()
    }, []);
    useEffect(()=>{
        dispatch({type:"TOTALS"})
    }, [state.cart])

    return(
        <AppContext.Provider value={{...state,clearCart,remove,decrease,increase,toggleAmount}}>
            {children}
        </AppContext.Provider>
    )
}
export const useAppContext = ()=> useContext(AppContext)
export {AppContext,AppContextProvider}