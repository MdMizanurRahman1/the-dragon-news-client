import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { AuthContext } from '../../../../../providers/AuthProvider';

const NavigationBar = () => {
    const { user } = useContext(AuthContext);
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link to='/'>Home</Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/career">Career</Nav.Link>
                        </Nav>
                        <Nav className='align-items-center justify-content-center'>
                            {user && <FaUser style={{ fontSize: '25px' }} />}

                            {user ?
                                <Button className='px-4' variant="dark">Logout</Button> :
                                <Link to='/login'>
                                    <Button className='px-4' variant="dark">Login</Button>
                                </Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;