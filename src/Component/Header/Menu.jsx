import React from 'react'
let styles ={
    position:"absolute",
}
const Menu = () => {
    return (
       <div className="AuthMenu">
           <ul>
               <li>
                <a href="#">
                  
               <span style={{styles}}>
                <i class="fas fa-cart-plus" ariaHidden="true">Cart</i>
               </span>
               </a></li>

               <li><a href="#">
                 
               <span style={{styles}}>
               <i class="fa fa-user" ariaHidden="true">Sign In</i>
               </span>
               </a></li>
           </ul>
       </div>
    )
}

export default Menu
