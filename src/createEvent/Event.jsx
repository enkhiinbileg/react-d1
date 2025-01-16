import React, { useState } from "react";
import { motion } from "framer-motion";
import './event.css'
import Navbar from '../navbar/navbar';
import EventUusge from "../eventUusge/eventUusge";

const Event = ({ addEvent }) => {
    return (
        <>
            <Navbar/>
            <EventUusge/>
        
        </>
    );
}

export default Event;