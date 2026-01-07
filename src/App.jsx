import './App.css'
import Header from './/components/componentHeader/header.jsx'
import Section from './components/componentSection/section.jsx'
import { useState} from 'react'

function App() {

  const [basket, setBasket] = useState([])

  function add(books) {
    setBasket(basket => {
      
        return [...basket, { ...books, quantity: 1 }] 
        
      })
      console.log(basket)
  }





  return (
    <>
      <Header basketCount={basket.length}/>
      <Section add={add}/>
    </>
  )
}

export default App;
