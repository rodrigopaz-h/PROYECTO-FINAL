import './App.css'
import './index.css'
import { Routes, Route } from 'react-router-dom';
import Checkout from './views/generalViews/Checkout';
import Prueba from './components/Prueba';
import ShippingForm from './components/layouts/ShippingForm';

function App() {


  return (
    
      <Routes>
          <Route path="/checkout" element={<Checkout />}>
            <Route path="prueba" element={<Prueba />}/>
            <Route path="envio" element={<ShippingForm/>} />
        </Route>
      </Routes>
  )
}

export default App
