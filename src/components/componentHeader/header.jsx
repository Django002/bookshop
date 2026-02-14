import './headerstyle.css';
import Basket from './componentbasket/basket';


function Header(props) {
   const {basketCount,basket,deleteboock} = props


    return(
        <header>
            <div className='headercotent'>
                <img className='header__logo' src="src/assets/Frame 85.png" alt="logo" />
                <ul className='header_nav'>
                    <li className='header_list' ><a href="#">Репродукции</a></li>
                    <li className='header_list' ><a href="#">Новинки</a></li>
                    <li className='header_list' ><a href="#">О нас</a></li>
                    <li className='header_list'>
                        <Basket basketCount={basketCount} basket={basket} deleteboock={deleteboock} />
                    </li>
                </ul>
            </div>  
        </header>
    )
}

export default Header;