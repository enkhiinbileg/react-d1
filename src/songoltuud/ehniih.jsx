import React from 'react';
import style from  './ehniih.module.css'
const Ehniih = ({buttonText}) => {
    return (
        <div>
           <button id={style.btn}>{buttonText}</button> 
        </div>
    );
}

export default Ehniih;
