import './basketstyle.css'
import {useState} from 'react'

function Basket({basketCount,basket,deleteboock}) {

    const [openbasket, setOpenbasket] = useState(false)
 

    return(
        <div className='header_corzina'>
            <button className='header_button' onClick={() => setOpenbasket(!openbasket)}><img src="" alt="" srcset="" /></button>
                {basketCount > 0 && (
                <span className="cart-count-mobile">{basketCount}</span>)}
           
                { openbasket && ( basketCount === 0 ? <div className='bascetblocnull'><p>Корзина пуста</p></div> 
                    : (<> 
                            <div className='bascetbloc'>
                            {basket.map(basket => (<div className='product' key={basket.id}>
                            <img src={basket.image} alt="" srcset="" />
                            <p className='producttitle'>{basket.title}</p>
                            <p className='productprice'>{basket.price}</p>
                            <p className='productquantity'>{basket.quantity}</p>
                            <button className='productbutton' type="button" onClick={() => deleteboock(basket.id)}>X</button>
                            </div>))}
                            </div> 
                        </>) 
                )}
            
            
            
            
        </div>
    )
}

export default Basket;