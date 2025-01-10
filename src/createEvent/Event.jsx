import React from 'react';
import './event.css'

const Event = () => {
    return (
        <div className='card2 w-full mt-[50px] h-min flex justify-center'>
            <img className='w-[85%] h-[100%] rounded-[50px] relative' src="Screenshot 2025-01-08 144006.png " alt="" /> 
            <div className="el absolute">
            <button class="button" data-text="Awesome">
                <span class="actual-text">&nbsp;Create&nbsp;</span>
                <span aria-hidden="true" class="hover-text">&nbsp;Create event&nbsp;</span>
            </button>
           </div>
        </div>
    );
}

export default Event;
