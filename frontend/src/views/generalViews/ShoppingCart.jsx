// Carrito

import React from 'react'
import Title from '../../components/layouts/Title'
import CartItem from '../../components/layouts/CartItem'
import Button from '../../components/layouts/Button';

export default function ShoppingCart() {
    const cartItems = [
        {
          code: 'RF293',
          name: 'Luxe card holder',
          imageSrc: 'https://i.ibb.co/6gzWwSq/Rectangle-20-1.png',
          imageSrcMobile: 'https://i.ibb.co/TTnzMTf/Rectangle-21.png',
          height: '10 inches',
          color: 'Black',
          composition: '100% calf leather',
          price: '$600',
        },
        {
            code: 'RF293',
            name: 'Luxe card holder',
            imageSrc: 'https://i.ibb.co/6gzWwSq/Rectangle-20-1.png',
            imageSrcMobile: 'https://i.ibb.co/TTnzMTf/Rectangle-21.png',
            height: '10 inches',
            color: 'Black',
            composition: '100% calf leather',
            price: '$600',
          },
        // Puedes agregar más artículos aquí
      ];
  return (
    <>
    <Title title='Carrito de compras'/>
    <div className="container mx-auto mt-10">
      <div className="sm:flex shadow-md my-10">
        <div className="w-full sm:w-3/4 bg-white px-10 py-10">

          {/* Item 1 */}
          <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
              <h2 className="font-semibold text-2xl">{cartItems.length} Items</h2>
            </div>

            {cartItems.map((item, index) => (
              <CartItem key={index} item={item} /> // Pasar el item como props
            ))}

          {/* Item 2 */}
          
        
        {/*Continuar comprando*/}
          <a href="#" className="flex font-semibold text-indigo-600 text-sm mt-10">
            <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
            Continue Shopping
          </a>
        </div>

        {/*Detalle de orden */}
        <div id="summary" className="w-full sm:w-1/4 md:w-1/2 px-8 py-10">
          <h1 className="font-semibold text-2xl border-b pb-8">Detalle de orden</h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase">Items 3</span>
            <span className="font-semibold text-sm">590$</span>
          </div>
          <div>
            <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
            <select className="block p-2 text-gray-600 w-full text-sm">
              <option>Standard shipping - $10.00</option>
            </select>
          </div>
          <div className="py-10">
            <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
            <input
              type="text"
              id="promo"
              placeholder="Enter your code"
              className="p-2 text-sm w-full"
            />
          </div>
          <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span>$600</span>
            </div>
           <Button className="mt-5 flex justify-end" text='Continuar'/>
          </div>
        </div>
      </div>
    </div>
    </>
    
  )
}
