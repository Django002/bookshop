import './headerstyle.css';

function Header({basketCount}) {

    

    return(
        <header>
            <img src="src/assets/Frame 85.png" alt="logo" />
            <ul className='header_nav'>
                <li className='header_list' ><a href="#">Репродукции</a></li>
                <li className='header_list' ><a href="#">Новинки</a></li>
                <li className='header_list' ><a href="#">О нас</a></li>
                <li className='header_list'>
                    <div className='header_corzina'>
                        <button className='header_button'><img src="" alt="" srcset="" /></button>
                        <span>{basketCount}</span>
                    </div>
                </li>
            </ul>

            
            
        </header>
    )
}

export default Header;