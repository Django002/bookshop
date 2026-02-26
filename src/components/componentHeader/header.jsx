import './headerstyle.css';
import Basket from './componentbasket/basket';
import { useState } from 'react';


function Header(props) {
   const {basketCount,basket,deleteboock} = props
    const [nemuOpen, setnemuOpen]= useState(false);

    const togleMenu = () =>{
        setnemuOpen(!nemuOpen)
        console.log('111')
    }

    return(
        <header>
            <div className='headercotent'>
                <img className='header__logo' src="src/assets/Frame 85.png" alt="logo" />

                <div className='desctopMenu'>
                    <ul className='header_nav'>
                        <li className='header_list' ><a href="#">Репродукции</a></li>
                        <li className='header_list' ><a href="#">Новинки</a></li>
                        <li className='header_list' ><a href="#">О нас</a></li>
                        <li className='header_list'>
                            <Basket basketCount={basketCount} basket={basket} deleteboock={deleteboock} />
                        </li>
                    </ul>
                </div>
               

                <div className='mobilemenu'>
                    <button className={`burger-icon ${nemuOpen ? 'open' : ''}`} onClick={togleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <div className='mobilemenu__bascet'>
                        <Basket basketCount={basketCount} basket={basket} deleteboock={deleteboock} />
                    </div>
                </div>
            </div>  
            
            <div className={`mobile-menu ${nemuOpen ? 'openmenu' : ''}`}>
                <ul className='mobile-menu_nav'>
                    <li className='header_list' ><a href="#">Репродукции</a></li>
                    <li className='header_list' ><a href="#">Новинки</a></li>
                    <li className='header_list' ><a href="#">О нас</a></li>
                </ul>
            </div>
            
        </header>
    )
}

export default Header;