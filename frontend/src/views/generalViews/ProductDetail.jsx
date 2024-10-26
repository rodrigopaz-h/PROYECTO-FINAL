// Producto
import Title from '../../components/layouts/Title'
import Button from '../../components/layouts/Button'
import QuantitySelector from '../../components/QuantitySelector'

import React from 'react'

export default function SingleProduct() {

  return (
    <>
    <Title title='Detalle de producto'/>
    <div className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
              <img
                className="w-full h-full object-cover"
                src="https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg"
                alt="Product Image"
              />
            </div>
           
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Product Name</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.
            </p>
            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                <span className="text-gray-600 dark:text-gray-300">$29.99</span>
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                <span className="text-gray-600 dark:text-gray-300">In Stock</span>
              </div>
            </div>
            <div className="mb-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">Selecciona tamaño:</span>
              <div className="flex items-center mt-2">
                {['S', 'M', 'L'].map(size => (
                  <button
                    key={size}
                    className="bg-gray-300 dark:bg-gray-700 rounded-full text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-end">
              <div className="mr-10">
                <span className="text-center text-sm font-semibold text-gray-700 dark:text-white mb-2">Cantidad:</span>
                <QuantitySelector/>
              </div>
              <div className="">
                <Button text='Agregar al carro' to='/checkout'/>
              </div>
            </div>
            
           
            <div>
              <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}