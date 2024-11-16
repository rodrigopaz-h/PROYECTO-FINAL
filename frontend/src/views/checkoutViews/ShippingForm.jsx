import React from 'react';
import Button from '../../components/layouts/Button';
import { Link} from "react-router-dom";

export default function ShippingForm() {
   
    return (
        <div>
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">Dirección de envío</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="first_name" className="block text-gray-700 dark:text-white mb-1">Nombre</label>
                        <input
                            type="text"
                            id="first_name"
                            className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                        />
                    </div>
                    <div>
                        <label htmlFor="last_name" className="block text-gray-700 dark:text-white mb-1">Apellido</label>
                        <input
                            type="text"
                            id="last_name"
                            className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                        />
                    </div>
                </div>

                <div className="mt-4">
                    <label htmlFor="address" className="block text-gray-700 dark:text-white mb-1">Address</label>
                    <input
                        type="text"
                        id="address"
                        className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                    />
                </div>
                <Link to="/checkout/envio">
                    <Button text='Continuar' /> 
                </Link>
            </div>
        </div>
    );
}