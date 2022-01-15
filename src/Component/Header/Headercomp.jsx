import React from 'react';
import "./header.css";
import Logo from './Logo';
import Menu from './Menu';
import Search from './Search';

const Headercomp = () => {
    return (
        
            <section id = "headercomp">
               <article>
               <Logo/>
               <Search/>
               <Menu/>
               </article>
            </section>
       
    )
}

export default Headercomp
