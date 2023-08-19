import './App.css';
import  Navbar  from './componentes/Navbar/navbar';
import  ItemListContainer  from './componentes/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contacto from './componentes/pags/Contacto';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Cart from './componentes/ItemDetailContainer/cart';
function App() {
  return (
   <>
   <BrowserRouter>

         <Navbar />

       <Routes>
             <Route path='/'   element={<ItemListContainer />} /> 
             <Route path='/productos/:categoria'   element ={<ItemListContainer />} /> 
             <Route path='/Contacto' element={<Contacto/>}    /> 
             <Route path='/item/:id' element={<ItemDetailContainer  />}    />
             <Route path='/cart'   element={<Cart/>} /> 
             
             </Routes>
    </BrowserRouter>
   
    
   </>
  );
}
export default App;
