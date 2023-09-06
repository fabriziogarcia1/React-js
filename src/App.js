import './App.css';
import  Navbar  from './componentes/Navbar/navbar';
import  ItemListContainer  from './componentes/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contacto from './componentes/pags/Contacto';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Carrito from './componentes/Carrito';
import { CartProvider } from './componentes/context/CartContext';
import Checkout from "./componentes/checkout";



function App() {
   
  

  return (
    
   <>
   <CartProvider>
   
   <BrowserRouter>

         <Navbar />

       <Routes>
             <Route path='/'   element={<ItemListContainer />} /> 
             <Route path='/productos/:categoria'   element ={<ItemListContainer />} /> 
             <Route path='/Contacto' element={<Contacto/>}    /> 
             <Route path='/item/:id' element={<ItemDetailContainer  />}    />
             <Route path='/carrito'   element={<Carrito />} />
             <Route path='/checkout'   element={< Checkout />} />
             </Routes>
    </BrowserRouter>
    </CartProvider>
   </>
  );
}
export default App;
