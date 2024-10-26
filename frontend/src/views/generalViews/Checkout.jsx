import React from 'react';
import Title from '../../components/layouts/Title'
import {  Link, Outlet, useLocation} from "react-router-dom";
import ShoppingDetail from '../checkoutViews/ShoppingDetail';


export default function Checkout() {
    const location = useLocation();
  return (
    <div className='h-screen'>
        <Title title='Tu compra'/>
        <div className="bg-gray-100 ">
            <div className="w-full max-w-7xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Checkout Column */}
                <div className="bg-white p-8 rounded-lg shadow-md border ">
                    <h1 className="text-2xl font-bold text-verde dark:text-white mb-4">Proceso de compra</h1>
                    <ul className='flex space-x-4 mb-10'>
                        <li>
                            <Link to="direccion" 
                            className={`px-4 py-2 ${location.pathname === "/checkout/direccion" ? 'text-white bg-amarillo' : 'bg-blue text-gray-700'}`}>1. Dirección
                            </Link>
                        </li>
                        <li>
                            <Link to="envio" 
                            className={`px-4 py-2 ${location.pathname === "/checkout/envio" ? 'text-white bg-amarillo' : 'bg-blue text-gray-700'}`}>
                                2. Envio
                            </Link>
                        </li>
                        <li>
                            <Link to="pago" 
                            className={`px-4 py-2 ${location.pathname === "/checkout/pago" ? 'text-white bg-amarillo' : 'bg-blue text-gray-700'}`}>
                               3. Pago
                            </Link>
                        </li>
                    </ul>
                    <Outlet />
                </div>

               <ShoppingDetail/>
                
            </div>
        </div>
    </div>
  )
}