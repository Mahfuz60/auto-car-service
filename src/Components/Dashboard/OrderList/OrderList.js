import React, { useContext, useEffect } from 'react';
import { userContext } from '../../../App';
import AdminDashboard from '../AdminDashboard/AdminDashboard';
import OrderListCard from '../OrderListCard/OrderListCard';

const OrderList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    useEffect(() => {
        fetch('https://whispering-caverns-51592.herokuapp.com/review')
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
    }, [])
    return (
        <div className="row">
            <div className="col-md-2">
                <AdminDashboard />
            </div>
            <div className="col-md-10 ">
                <div className="row">
                    <div className="col-md-6">
                        <h4 style={{}} className="m-4">Order List</h4>
                    </div>
                    <div className="col-md-6 ">
                        <h4 style={{}} className="text-info m-4">{loggedInUser.name}</h4>
                    </div>
                </div>
                <OrderListCard />
            </div>
        </div>
    );
};

export default OrderList;