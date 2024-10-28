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
import SingleProduct from "./views/generalViews/ProductDetail";
import { ProductProvider } from "./Context/ProductContext";
import ProductDetail from "./views/generalViews/ProductDetail";
import ProductosTodos from "./views/generalViews/ProductGallery";
import Footer from "./components/layouts/Footer";
import AboutUs from "./views/generalViews/AboutUs"
import LegalPrivacy from "./views/generalViews/LegalPrivacy";
import Contacto from "./views/generalViews/Contacto";

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
          <Route path="producto" element={<ProductDetail/>}/>
          <Route path="galeria" element={<ProductosTodos/>}/>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/legal" element={<LegalPrivacy />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer />
      </ProductProvider>
    </>
  );
}

export default App;
