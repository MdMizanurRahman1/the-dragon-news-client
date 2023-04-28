import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h3>Our terms and conditions</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minus, eligendi repellendus, possimus repudiandae inventore soluta in minima quaerat voluptatum iure laboriosam non assumenda aliquid quasi dolore officia debitis quidem!</p>
            <p>Go back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;