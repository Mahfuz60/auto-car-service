import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
const PaymentProcessCard = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            
            return;
        }

    
        const cardElement = elements.getElement(CardElement);

        
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <span className="text-muted " style={{ marginRight: '100px' }}>Your Service Charge Will Be</span> <button onSubmit={handleSubmit}  className="btn btn-warning"type="submit" disabled={!stripe}>
                Pay
        </button>
        </form>
    );
};

export default PaymentProcessCard;