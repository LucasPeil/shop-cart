import { useAppContext } from "./Context/context"
import {FaShoppingBag} from "react-icons/fa"
const Navbar = () => {
  const {amount} = useAppContext();
  return (
    <nav>
      <div >
        <h3>Carrinho de compras</h3>
        <div >
          <FaShoppingBag/>
          <div >
            <p >{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar