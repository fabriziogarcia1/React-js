import './App.css';
import  Navbar  from './componentes/Navbar/navbar';
import  Itemcontainer  from './componentes/Item/Itemcontainer';
import ItemDetail from './componentes/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contacto from './componentes/pags/Contacto';

function App() {
  return (
   <>
   <BrowserRouter>

         <Navbar />

           <Routes>
             <Route path='/'   element={<Itemcontainer />} /> //PAGINA DE INICIO
             <Route path='/item' element={<ItemDetail/>}    /> //CARD SELECCIONADA
             <Route path='/Contacto' element={<Contacto/>}    />
           </Routes>

       

    </BrowserRouter>
   </>
  );
}
export default App;
