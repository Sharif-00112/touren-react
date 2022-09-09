import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
// import logo from '../../../images/logo.png'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
 
const Header = () => {
    const {user, logout} = useAuth();
    return (
        <>
            <Navbar className='bg-opacity-75' collapseOnSelect expand="lg" bg="success" variant="light" sticky='top'>
                <Container>
                    <Navbar.Brand className='text-white fw-bold fs-2' href="/home">
                        {/* <img src={logo} height="30" alt="" /> */}
                        TOUREN
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home" className='mx-3 text-white fw-semibold'>Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#packages" className='mx-3 text-white fw-semibold'>Packages</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#reviews" className='mx-3 text-white fw-semibold'>Reviews</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#about" className='mx-3 text-white fw-semibold'>About</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#contact" className='mx-3 text-white fw-semibold'>Contact</Nav.Link>
                        {user?.email ?
                            <div className="">
                                <Navbar.Text className='mx-4'>
                                    <Nav.Link as={Link} to="/login" className='d-inline text-info'>Signed in as: {user?.displayName}</Nav.Link>
                                </Navbar.Text>
                                <Button onClick={logout} variant='light'>Logout</Button> 
                            </div>
                            :
                            <Nav.Link as={Link} to="/login" className='mx-5'><Button variant='light'><span className='text-dark fw-bold'>Login</span></Button></Nav.Link>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;