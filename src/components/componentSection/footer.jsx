import './footerstyle.css'

function Footer() {
    return(
        <div className="Footer_content">
            <div className="content_contein1">
                <img src="src\assets\Frame 85.png" alt="" srcset="" />
                <p className='action'>+7 (999) 543-54-54</p>
                <p>Мастерская</p>
            </div>
            <div className="contein">
                <div className="content_contein">
                    <p className='contein_zagalovoc'>Репродукции</p>
                    <p className='nosratic'>Франция</p>
                    <p className='nosratic'>Германия</p>
                    <p className='nosratic'>Англия</p>
                </div>
                    <div className="content_contein">
                    <p className='contein_zagalovoc'>Новинки</p>
                    <p className='nosratic'>2021</p>
                    <p className='nosratic'>2020</p>

                </div>
                <div className="content_contein">
                    <p className='contein_zagalovoc'>О нас</p>
                    <p className='nosratic'> Художники</p>
                    <p className='nosratic'>Менеджеры</p>
                </div>
            </div>
            <div className='medicontein'>
                <div className='medi'>
                    <img src="src\assets\Frame.png" alt="" srcset="" />
                    <img src="src\assets\Frame (1).png" alt="" srcset="" />
                    <img src="src\assets\Frame (2).png" alt="" srcset="" />
                </div>
                <p>Ink. House ®</p>
                <p>All rights reserved</p>
            </div>
        </div>
    );
}

export default Footer;