import { useEffect, useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Main from './Components/Main'

function App() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch('recipe.json')
    .then(res => res.json())
    .then(data => setRecipes(data))
  }, [])

  return (
    <>
      <Header></Header>
      <Main recipes={recipes}></Main>
    </>
  )
}

export default App
