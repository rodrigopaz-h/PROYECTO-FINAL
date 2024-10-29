//App.jsx
import "./App.css";
import "./index.css";
import React from "react";
import Navbar from "./components/layouts/Navbar";
import "@fortawesome/fontawesome-free/css/all.min.css";
import PublicationDetail from "./views/generalViews/PublicationDetail";
import PublicationGallery from "./views/generalViews/PublicationGallery";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/layouts/Home";
import Checkout from "./views/generalViews/Checkout";
import ShippingForm from "./views/checkoutViews/ShippingForm";
import PaymentMethod from "./views/checkoutViews/PaymentMethod";
import ShippingMethod from "./views/checkoutViews/ShippingMethod";
import ShippingAlert from "./views/checkoutViews/ShippingAlert";
import { ProductProvider } from "./Context/ProductContext";
import { UserProvider } from "./context/UserContext";
import ProductDetail from "./views/generalViews/ProductDetail";
import ProductGallery from "./views/generalViews/ProductGallery";
import ProductCategory from "./views/generalViews/ProductCategory";
import ShoppingCart from "./views/generalViews/ShoppingCart";
import Footer from "./components/layouts/Footer";
import AboutUs from "./views/generalViews/AboutUs";
import LegalPrivacy from "./views/generalViews/LegalPrivacy";
import Contacto from "./views/generalViews/Contacto";
import UserRegistration from "./views/userViews/UserRegistration";
import UserLogin from "./views/userViews/UserLogin";
import { UserInfo } from "./views/userViews/UserInfo";
import { PasswordResetRequest } from "./views/userViews/PasswordResetRequest";
import { PasswordResetSuccess } from "./views/userViews/PasswordResetSuccess";
import BlogPage from "./views/generalViews/BlogPage";
import NotFound from "./views/generalViews/NotFound";


function App() {
  return (
    <>
      <UserProvider>
        <ProductProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<UserRegistration />} />
            <Route path="/login" element={<UserLogin />} />
            <Route path="/checkout" element={<Checkout />}>
              <Route index element={<Navigate to="direccion" replace />} />
              <Route path="direccion" element={<ShippingForm />} />
              <Route path="envio" element={<ShippingMethod />} />
              <Route path="pago" element={<PaymentMethod />} />
            </Route>
            <Route path="alerta" element={<ShippingAlert />} />
            <Route path="producto/:id" element={<ProductDetail />} />
            <Route path="todos" element={<ProductGallery />} />
            <Route path="cafes" element={<ProductCategory />} />
            <Route path="accesorios" element={<ProductCategory />} />
            <Route path="carrito" element={<ShoppingCart />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/legal" element={<LegalPrivacy />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/micuenta" element={<UserLogin />} />
            <Route path="/blog/:id" element={<PublicationDetail />} />
            <Route path="/blog" element={<PublicationGallery />} />
            <Route path="/profile" element={<UserInfo />} />
            <Route path="/acceso-seguridad" element={<PasswordResetRequest />} />
            <Route path="/enviar" element={<PasswordResetSuccess />} />
            <Route path="/all-blogs" element={<BlogPage />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
          <Footer />
        </ProductProvider>
      </UserProvider>
    </>
  );
}

export default App;
