// Detalle de envío
import React from 'react'

export default function ShoppingDetail() {
  return (
    <div>
        <div className="bg-white p-8 rounded-lg shadow-md border ">
        <h1 className="text-2xl font-bold text-verde dark:text-white mb-4">Detalle de la compra</h1>
        {/* Cart Item */}
        <div className="flex justify-between mb-4">
            <div className="flex items-center">
                <img
                src="https://via.placeholder.com/80"
                alt="Product Image"
                className="mr-4"
                />
                <div>
                <h2 className="font-bold">Product Name</h2>
                <p className="text-gray-700">Product Description</p>
                </div>
            </div>
            <div className="flex items-center">
                <button className="text-red-500 hover:text-red-700">
                <i className="fas fa-trash"></i>
                </button>
                <div className="mx-4">
                <input
                    type="number"
                    defaultValue="1"
                    className="w-16 text-center border border-gray-300 rounded"
                />
                </div>
                <span className="font-bold">$19.99</span>
            </div>
            </div>
        
            <hr className="my-4" />

            {/* Subtotal */}
            <div className="flex justify-between items-center">
            <span className="font-bold">Subtotal:</span>
            <span className="font-bold">$19.99</span>
            </div>

            {/* Taxes */}
            <div className="flex justify-between items-center mt-4">
            <span>Tipo de envío</span>
            <span>$1.00</span>
            </div>

            <hr className="my-4" />

            {/* Total */}
            <div className="flex justify-between items-center">
            <span className="font-bold">Total:</span>
            <span className="font-bold">$20.99</span>
            </div>
        </div>
    </div>
  )
}
