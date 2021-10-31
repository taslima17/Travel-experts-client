import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
import logo from '../../../travelexperts-logo.jpg'
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
const Header = () => {
    const { googleSignin, user, logOut } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand as={Link} to="/home">
                        <h1 className="logo">Travel <span>Experts</span></h1>


                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto align-items-center d-flex">
                            <Nav.Link className="link" as={Link} to="/home">Home</Nav.Link>

                            <Nav.Link className="link" as={Link} to="/flights">Flights</Nav.Link>
                            <Nav.Link className="link" as={Link} to="/hotels">Hotels</Nav.Link>
                            {user.email ? <Nav.Link className="link" as={Link} to="/manageAllPackages">ManagePackages</Nav.Link> : ""}
                            {user.email ? <Nav.Link className="link" as={Link} to="/addDestination">InsertDestination</Nav.Link> : ""}
                            {user.email ? <Nav.Link className="link" as={Link} to="/myBookings">My Bookings</Nav.Link> : ""}
                            <Nav.Link className="link" as={Link} to="/login"> {user.email ? <button onClick={logOut} style={{ background: "none", border: "0" }}>LogOut {user.displayName}</button> : <Button variant="dark">Login</Button>} </Nav.Link>


                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;