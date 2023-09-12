import './App.css'
import Cards from './Components/Cards/Cards'
import Cart from './Components/Cart/Cart'
import Header from './Components/Header/Header'

function App() {

  return (
    <>
      <div className='md:w-3/4 mx-auto'>
        <header><Header></Header></header>
        <main>
          <div className='md:flex'>
            <Cards></Cards>
            <Cart></Cart>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
