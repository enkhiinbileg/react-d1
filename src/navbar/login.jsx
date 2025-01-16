import React from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <nav>
            <Link to="/loginnn">
                <p className="text-white px-[15px] py-[10px] hover:bg-gray-900 rounded-[30px] text-[14px]">
                Log in
                </p>
            </Link>

        </nav>
    );
}

export default Login;
