import Swal from 'sweetalert2'
import { useState, useEffect } from "react"
import Header from "./components/header"
import Main from "./components/Main";
import Footer from './footer/Footer';

function App() {
  const [cards,SetCards] = useState([]);
  const [spacialCards,setSpacialCards] = useState([]);

  const [orderCards,setOrderCards] = useState([])
  const[oderedPrice,setOderedPrice] = useState(0)
  

  useEffect(()=>{
    fetch("food.json")
    .then(res => res.json())
    .then (data => SetCards(data))
  },[])

  // spacial Cards 
  useEffect(()=>{
    fetch("spacialItem.json")
    .then(res => res.json())
    .then (data => setSpacialCards(data))
  },[])
  

  // handleOrder 
  function handleOrder(orderCard){

    const ordersCardsId = orderCards.map(cards=>cards.id);

    if(!ordersCardsId.includes(orderCard.id)){
      const newCards =[...orderCards,orderCard];
      setOrderCards(newCards);
      setOderedPrice(oderedPrice+orderCard.price)

      Swal.fire({
        icon: 'success',
        title: 'Order added your order list',
        text: 'Check your order list',
      })
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'this food  is alaredy you odered!',
       
      })
      
    }
  }

  // orderConfirm
  const confirmOrder = () =>{
      setOrderCards([])
      setOderedPrice(0)

      Swal.fire({
        icon: 'success',
        title: 'Order Confirm hare',
        text: 'Enjoy Your Food with your circle',
        footer:'Thank you'
      })
  }


  return (
    
    <>
         <Header></Header>
         <Main cards={cards} spacialCards={spacialCards} orderCards={orderCards} handleOrder ={handleOrder} oderedPrice={oderedPrice} confirmOrder={confirmOrder}></Main>
         <Footer></Footer>

    </>
  )
}

export default App
