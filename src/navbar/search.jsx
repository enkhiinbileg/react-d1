
import React, { useState } from 'react'; 
import styles from './search.module.css';
import { IoSearch } from "react-icons/io5";
const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');

   const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
    return (
        <div>
            <div className={styles.card}>
                <IoSearch className='m-[15px] text-gray-500'/>
                <input 
                    type="text" 
                    value={searchTerm} 
                    onChange={handleChange} 
                    placeholder="Search..." 
                    className="  rounded-md text-lg focus:outline-none h-90%  w-[300px] text-[13px]"
                />
                <div className={styles.search_buton1}>search</div>
            </div>
        </div>
    );
}

export default Search;