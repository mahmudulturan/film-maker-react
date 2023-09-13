import { useState } from 'react'
import './App.css'
import Cards from './Components/Cards/Cards'
import Cart from './Components/Cart/Cart'
import Header from './Components/Header/Header'
import Swal from 'sweetalert2'

function App() {
  const [cart, setCart] = useState([]);
  const [cost, setCost] = useState(0);
  const [remaining, setRemaining] = useState(cost);
  const budget = 40000;
  const handlerPurchase = (item) => {
    const isFound = cart.find(actor=> actor.id === item.id);
    if(isFound){
      return Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Already Purchased',
        showConfirmButton: false,
        timer: 1500
      })
    }
    else{
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Purchased Confirmed',
        showConfirmButton: false,
        timer: 1500
      })
      let totalCost = item.salary;
      cart.forEach(item=>{
        totalCost = totalCost + item.salary;
      })
      const remain = budget - totalCost ;
      if(remain<0){
        return Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Budget Limit Over',
          showConfirmButton: false,
          timer: 1500
        })
      }
      setCost(totalCost)
      setRemaining(remain)
      const newCart = [...cart, item]
      setCart(newCart);
    }
  }

  return (
    <>
      <div className='md:w-3/4 mx-auto px-2'>
        <header><Header></Header></header>
        <main>
          <div className='md:flex gap-6'>
            <Cards handlerPurchase={handlerPurchase}></Cards>
            <Cart cart={cart} cost={cost} remaining={remaining} budget={budget}></Cart>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
