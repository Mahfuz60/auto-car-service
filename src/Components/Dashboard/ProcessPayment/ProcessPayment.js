import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleProcessPayment';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51IePf8BenyxnrVzCrTvibzX3fdE381gjcINDZsvRUZHaLwVeWdjLmEg1UIrVeoKT0ORC5y8AoTe5L15Bj69WIQ7m00gaKCm68B');

const ProcessPayment = () => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm />
        </Elements>
    );
};

export default ProcessPayment;