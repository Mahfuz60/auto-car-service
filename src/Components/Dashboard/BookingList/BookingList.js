import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const BookingList = ({book}) => {
    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10 ">
                <div className="row">
                    <div className="col-md-6">
                        <h4 style={{}} className="m-4">Booking List</h4>
                    </div>
                    <div className="col-md-6 ">
                        <h4 style={{}} className="text-brand m-4">{book.name}</h4>
                        <h4 style={{}} className="text-brand m-4">{book.email}</h4>
                        <h4 style={{}} className="text-brand m-4">{book.service}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingList;