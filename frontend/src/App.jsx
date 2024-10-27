import "./App.css";
import "./index.css";
import React from "react";
import Navbar from "./components/layouts/Navbar";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/layouts/Home";
import Checkout from "./views/generalViews/Checkout";
import ShippingForm from "./views/checkoutViews/ShippingForm";
import PaymentMethod from "./views/checkoutViews/PaymentMethod";
import ShippingMethod from "./views/checkoutViews/ShippingMethod";
import ShippingAlert from "./views/checkoutViews/ShippingAlert";
import { ProductProvider } from "./Context/ProductContext";
import ProductDetail from "./views/generalViews/ProductDetail";
 import ProductGallery from "./views/generalViews/ProductGallery";
 import ProductCategory from "./views/generalViews/ProductCategory";
import Categoria from "./views/generalViews/Categoria";
import ShoppingCart from "./views/generalViews/ShoppingCart";

function App() {
  return (
    <>
      <ProductProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />}>
              <Route index element={<Navigate to="direccion" replace />} />
              <Route path="direccion" element={<ShippingForm/>} />
              <Route path="envio" element={< ShippingMethod/>}/>
              <Route path="pago" element={<PaymentMethod />}/>
          </Route>
          <Route path="alerta" element={<ShippingAlert />}/>
          <Route path="producto/:id" element={<ProductDetail/>}/>
          <Route path="todos" element={<ProductGallery />} /> 
          <Route path="cafes" element={<ProductCategory />} />
          <Route path="accesorios" element={<ProductCategory/>} />
          <Route path="carrito" element={<ShoppingCart/>} />
          <Route path="prueba" element={<Categoria/>} />
        </Routes>
      </ProductProvider>
    </>
  );
}

export default App;
