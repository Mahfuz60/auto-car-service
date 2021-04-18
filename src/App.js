import "./App.css";
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login/Login";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";
import Booking from "./Components/Dashboard/Booking/Booking";
import BookingList from "./Components/Dashboard/BookingList/BookingList";
import AdminDashBoard from "./Components/Dashboard/AdminDashBoard/AdminDashBoard";
import AddService from "./Components/Dashboard/AddService/AddService";
import OrderList from "./Components/Dashboard/OrderList/OrderList";
import Review from "./Components/Dashboard/Review/Review";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";




export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={(loggedInUser, setLoggedInUser)}>
      <Router>
        <Switch>
        <Route path="/login">
            <Login></Login> 
          </Route>
          <Route path='/home'>
            <Home></Home>

          </Route>
          <Route path='/dashboard'>
            <Dashboard></Dashboard>
          </Route>
        
          <PrivateRoute path='/addService'>
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path='/admin'>
            <AdminDashBoard></AdminDashBoard>
          </PrivateRoute>
          <PrivateRoute path='/orderList'>
            <OrderList></OrderList>
          </PrivateRoute>
         
          <PrivateRoute path='/booking'>
            <Booking></Booking>
          </PrivateRoute> 
           <PrivateRoute path='/bookingList'>
            <BookingList></BookingList>
          </PrivateRoute>
          <PrivateRoute path='/review'>
            <Review></Review>
          </PrivateRoute>
          
          
          
          
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
