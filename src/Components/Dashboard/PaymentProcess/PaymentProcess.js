import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import PaymentProcessCard from './PaymentProcessCard';

const PaymentProcess = () => {
    const stripePromise=loadStripe('pk_test_51IePf8BenyxnrVzCrTvibzX3fdE381gjcINDZsvRUZHaLwVeWdjLmEg1UIrVeoKT0ORC5y8AoTe5L15Bj69WIQ7m00gaKCm68B');
    return (
        <div>
             <Elements stripe={stripePromise}>
             <PaymentProcessCard></PaymentProcessCard>
            </Elements>
            
        </div>
    );
};

export default PaymentProcess;