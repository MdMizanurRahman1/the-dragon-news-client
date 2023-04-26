
import React from 'react';
import logo from '../../../../../assets/logo.png';
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {

    return (
        <Container>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex bg-secondary bg-gradient bg-opacity-10 p-2 gap-3'>
                <Button variant="danger">Latest</Button>
                <Marquee speed={50}>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>
            </div>

        </Container>
    );
};

export default Header;