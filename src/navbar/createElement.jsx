import React from 'react';
import './createElement.css'
import { Link } from 'react-router-dom';

const CreateElement = () => {
    return (
        <div>
            <Link className="card1" to={"/Event"} element={<Event/>}>
                <h1>+</h1>
                <p> Create Event</p>
            </Link>
        </div>
    );
}

export default CreateElement;