import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/shared/Card';

const AboutPage = () => {
    return (
        <Card>
            <div className='about'>
                <h1>About Us</h1>
                <p>A simple react app for rating your products and services</p>
                <p>Version 1.0.0</p>
                <p>Dev Emma</p>

               <p>
                    <Link to='/'>Back To Home</Link>
               </p>
            </div>
        </Card>
    )
}

export default AboutPage
