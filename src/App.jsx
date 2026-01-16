import './App.css'
import Header from './/components/componentHeader/header.jsx'
import Section from './components/componentSection/section.jsx'
import { useState} from 'react'
import { useEffect} from 'react'


function App() {

  const [basket, setBasket] = useState([])

  function add(books) {
    setBasket(basket => {
      const existingItem  = basket.find(item => item.id === books.id)
      if (existingItem) {
        return basket.map(item => item.id === books.id ? { ...item, quantity: item.quantity + 1 } : item)
      } else {
        return [...basket, { ...books, quantity: 1 }] 
      } 
        
    })
  }

  useEffect(() => {
    console.log("Корзина обновлена:", basket);
  }, [basket]);

  const totalItems = basket.reduce((sum, item) => sum + item.quantity, 0);

 





  return (
    <>
      <Header 
        basketCount={totalItems} 
        basket={basket}/>
      <Section add={add}/>
    </>
  )
}

export default App;
