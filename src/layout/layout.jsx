import Navbar from '../navbar/navbar'
import Animation from '../undsenHeseg/animation'
import Event from '../createEvent/Event'
import Songoltuud from '../songoltuud/songoltuud'
import Cards from '../togsgolHeseg/cards'
import Tekst from '../togsgolHeseg/tekst'
import React from 'react';
import ThreeScene from '../components/ThreeScene'

const Layout = () => {
    return (
        <div>
            <Navbar/>
            <Animation/>
            <Event/>
            <Songoltuud/>
            <Cards/>
            <Tekst/>
            <ThreeScene/>
        </div>
    );
}

export default Layout;