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
             {/*<Route path='/'   element={<ItemListContainer />} />*/ }
             <Route path='/Contacto' element={<Contacto/>}    />
             <Route path='/cart'   element={<Cart/>} /> 
             
             </Routes>
    </BrowserRouter>
   
    <ItemDetailContainer item ={1}/>
   </>
  );
}
export default App;
