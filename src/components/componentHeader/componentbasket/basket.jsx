import './basketstyle.css'
import {useState} from 'react'

function Basket({basketCount,basket}) {

    const [openbasket, setOpenbasket] = useState(false)
 

    return(
        <div className='header_corzina'>
            <button className='header_button' onClick={() => setOpenbasket(true)}><img src="" alt="" srcset="" /></button>
                {basketCount > 0 && (
                <span className="cart-count-mobile">{basketCount}</span>)}
           
                { openbasket === true ?
                (basket.map(basket => (<div className='product' key={basket.id}>
                    <img src={basket.image} alt="" srcset="" />
                    <p>{basket.title}</p>
                    <p>{basket.price}</p>
                    <p>{basket.quantity}</p>
                    <button type="button" onClick={() => setOpenbasket(false)}>X</button>
                </div>))) 
                : <p>'safasfasfas'</p>}
            
            
            
            
        </div>
    )
}

export default Basket;