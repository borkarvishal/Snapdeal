import React from 'react'
import LeftHeader from './LeftHeader'
import RightHeader from './RightHeader'

import  './TopHeader.css';

const TopHeader = () => {
    return (
       <section  id ="topheader">
           <article>
               <LeftHeader/>
               <RightHeader/>
           </article>
       </section>
    )
}

export default TopHeader
