import React from 'react';
import './Banner.css'
import { Button } from 'react-bootstrap'

const Banner = () => {
    return (
        <div className="banner">
            <h1>Let the journey begin</h1>
            <p>Find the perfect excuse to revisit an old favorite or get a taste of somewhere new</p>
            <Button variant="light" className="p-3 fw-bold">Learn More</Button>

        </div>
    );
};

export default Banner;