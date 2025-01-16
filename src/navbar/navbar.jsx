import React from 'react';
import Logo from './logo';
import Search from './search';
import Sign from './sign';
import Login from './login';
import CreateElement from './createElement';
const Navbar = () => {
    return (
        <div className='flex   items-center w-full bg-black fixed m-0 z-10 py-[10px] top-0'>
            <Logo/>
            <Search/>
            <Sign/>
            <Login/>
            <CreateElement/>
        </div>
    );
}

export default Navbar;
