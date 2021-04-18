import React, { useState } from 'react';
import DashboardCard from '../DashboardCard/DashboardCard';
import Sidebar from '../Sidebar/Sidebar';

const dashboardData = [
    {
        id: 1,
        title: 'Order List',
        backgroundColor: 'bg-danger',
    },
    {
        id: 2,
        title: "Today's Order",
        backgroundColor: 'bg-primary',
    },
    {
        id: 3,
        title: 'Pending',
        backgroundColor: 'bg-success',
    },
    {
        id: 4,
        title: 'Complete Services',
        backgroundColor: 'bg-warning',
        
    },
]

const Dashboard = () => {
    const [process,setProcess] = useState([]);
    document.title = 'Dashboard';
    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10 ">
                <h4 style={{ color: '#1CC7C1',fontWeight:'700' }} className="m-4">Dashboard</h4>
                <div className="row">

                    {
                        dashboardData.map(data => <DashboardCard key={data.id} data={data} process={process}/>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Dashboard;