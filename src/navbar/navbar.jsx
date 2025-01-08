import React from 'react';
import Logo from './logo';
import Search from './search';
import Sign from './sign';
import Login from './login';
import CreateElement from './createElement';
const Navbar = () => {
    return (
        <div className='flex gap-[70px] justify-center items-center w-full bg-black fixed'>
            <Logo/>
            <Search/>
            <Sign/>
            <Login/>
            <CreateElement/>
        </div>
    );
}

export default Navbar;
