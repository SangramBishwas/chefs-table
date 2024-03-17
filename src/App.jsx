import { useEffect, useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Main from './Components/Main'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [cart, setCart] = useState([]);
  const [cooking, setCooking] = useState([]);
  const [maxTime, setMaxTime] = useState(0);

  useEffect(() => {
    fetch('recipe.json')
      .then(res => res.json())
      .then(data => setRecipes(data))
  }, [])

  const handlWantToCook = (recipe) => {
    const isExist = cart.find((item) => item.id === recipe.id);
    !isExist ? setCart([...cart, recipe]) : toast('this item has already added');
  }

  const handleCooking = (cook, time, id) => {
    const remainCartItem = cart.filter((item) => item.id !== id);
    setCart(remainCartItem);
    const newMaxTime = maxTime + time;
    setMaxTime(newMaxTime);
    setCooking([...cooking, cook]);
  }

  return (
    <>
      <Header></Header>
      <Main
        recipes={recipes}
        handlWantToCook={handlWantToCook}
        handleCooking={handleCooking}
        cart={cart}
        cooking={cooking}
        maxTime={maxTime}
      ></Main>
      <ToastContainer />
    </>
  )
}

export default App
