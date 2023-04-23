import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../../../assets/bg.png';
import './RightNav.css'

const RightNav = () => {
    return (
        <div>
            <h5 className='mb-3 fw-bold fs-5'>Login With</h5>
            <Button className='mb-1 px-3 w-100 text-center' variant="outline-primary"> <FaGoogle /> Login with Google</Button>
            <Button className='px-3 w-100 text-center text-dark' variant="outline-secondary"><FaGithub className='text-dark' /> Login with Github</Button>
            <div className='mt-4'>
                <h5 className='mb-3 fw-bold fs-5'>Find us on</h5>
                <ListGroup>
                    <ListGroup.Item><FaFacebookF className='text-primary' /> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter className='text-info' /> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram className='text-danger' /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div className='article'>
                <img className='picture' src={bg} alt="" />
                <h3 className='header'>Create an Amazing Newspaper</h3>
                <p className='header-1'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <Button className='header-2 bg-danger'>Learn More</Button>
            </div>
        </div>
    );
};

export default RightNav;