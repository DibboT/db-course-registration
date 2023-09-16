import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./Home";
import './Home.css'
import Cart from "./Cart";
import './Cart.css'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
     <Home></Home>
     <ToastContainer></ToastContainer>
    

     
    </>
  )
}

export default App
