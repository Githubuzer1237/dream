import React from 'react'
import './Header.css'
const Header = () => {
  return (
   <>
   <header className="header">
      <div className="container">
         <div className="header__wrapper">
            <div className="header__box">
               <h1>Lorem ipsum dolor sit amet <br /> <span>consectetur</span></h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, harum. Laborum aliquid velit harum magnam officia.</p>
               <button>ДВИГАТЬСЯ К МЕЧТЕЕЕ!</button>
            </div>

            <img className='header__img' src="/main.png" alt="" />
         </div>
      </div>
   </header>
   </>
  )
}

export default Header