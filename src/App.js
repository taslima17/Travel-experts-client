
import './App.css';
import Header from './Pages/Shared/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import AuthProvider from './Context/AuthProvider';
import Login from './Pages/Login/Login';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import DestinationDetails from './Pages/Home/DestinationBd/DestinationDetails';
import NotFound from './Pages/NotFound/NotFound';
import MyBooking from './Pages/MyBooking/MyBooking';

import AddNewDestination from './Pages/AddNewDestination/AddNewDestination';
import ManageAllPackages from './ManageAllPackages/ManageAllPackages';
import Hotels from './Hotels/Hotels';
import Flights from './Flights/Flights';
import Footer from './Pages/Shared/Footer/Footer';

function App() {

  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/addDestination">
              <AddNewDestination></AddNewDestination>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/hotels">
              <Hotels></Hotels>
            </Route>
            <Route path="/flights">
              <Flights></Flights>
            </Route>
            <PrivateRoute path="/destination/:id">
              <DestinationDetails></DestinationDetails>
            </PrivateRoute>
            <Route path="/myBookings">
              <MyBooking></MyBooking>
            </Route>
            <Route path="/manageAllPackages">
              <ManageAllPackages></ManageAllPackages>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
