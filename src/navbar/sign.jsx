import React from 'react';
import { Link } from 'react-router-dom';


const Sign = () => {
    return (
        <Link to={"/signupp"} element={"signnnup"}>
            <h1 className='text-white px-[15px] py-[10px] hover:bg-gray-900 rounded-[30px] ml-[130px] text-[14px]'>Sign up</h1>
        </Link>
    );
}

export default Sign;
