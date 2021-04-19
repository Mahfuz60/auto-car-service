
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login/Login';
import { createContext, useState } from 'react';
import MainDashboard from './Components/Dashboard/MainDashboard/MainDashboard';
import Review from './Components/Dashboard/Review/Review';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import Booking from './Components/Dashboard/Booking/Booking';
import BookingList from './Components/Dashboard/BookingList/BookingList';
import AdminDashboard from './Components/Dashboard/AdminDashboard/AdminDashboard';
import AddService from './Components/Dashboard/AddService/AddService';
import NotFound from './Components/NotFoundPage/NotFound';
import OrderList from './Components/Dashboard/OrderList/OrderList';


// Context API
export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/customerDashboard">
            <MainDashboard />
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <AdminDashboard />
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <AddService />
          </PrivateRoute>
          <PrivateRoute path="/orderList">
            <OrderList />
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review />
          </PrivateRoute>
          <PrivateRoute path="/booking">
            <Booking />
          </PrivateRoute>
          <PrivateRoute path="/bookingList">
            <BookingList />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
