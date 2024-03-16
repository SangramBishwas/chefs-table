import { useEffect, useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Main from './Components/Main'

function App() {
  const [recipes, setRecipes] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('recipe.json')
      .then(res => res.json())
      .then(data => setRecipes(data))
  }, [])

  const handlWantToCook = (recipe) => {
    setCart([...cart, recipe]);
  }

  return (
    <>
      <Header></Header>
      <Main
      recipes={recipes}
      handlWantToCook={handlWantToCook}
      cart={cart}
      ></Main>
    </>
  )
}

export default App
