
import './App.css';
import { useAppContext } from './Context/context';
import Navbar from './Navbar'
import CartContainer from './CartContainer'

function App() {
  const {loading} = useAppContext()

  if(loading){
    return(
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <main >
      <Navbar/>
      <CartContainer/>
    </main>
  );
}

export default App;
