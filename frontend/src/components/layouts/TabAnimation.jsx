import React, { useState } from 'react';
import ShippingMethod from './ShippingMethod';
import ShippingForm from './ShippingForm';
import PaymentMethod from './PaymentMethod';

export default function TabAnimation() {
    const [currentComponent, setCurrentComponent] = useState('shippingForm');

    const renderComponent = () => {
        switch (currentComponent) {
            case 'shippingForm':
                return <ShippingForm onNext={() => setCurrentComponent('shippingMethod')} />;
            case 'shippingMethod':
                return <ShippingMethod />;
            case 'paymentMethod':
                return <PaymentMethod />;
            default:
                return null;
        }
    };

    return (
        <div>
            <div className="wrapper">
                {renderComponent()}
            </div>
        </div>
    );
}
