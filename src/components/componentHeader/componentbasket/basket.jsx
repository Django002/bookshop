import './basketstyle.css'
import {useState, useRef, useEffect} from 'react'

function Basket({basketCount,basket,deleteboock}) {

    const [openbasket, setOpenbasket] = useState(false)

    const basketRef = useRef(null)

    
    const closeBasket = () => {
        setOpenbasket(false)
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (basketRef.current && 
                !basketRef.current.contains(event.target) &&
                !event.target.closest('.header_button')) {
                closeBasket()
            }
        }

        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                closeBasket()
            }
        }

        if (openbasket) {
            document.addEventListener('mousedown', handleClickOutside)
            document.addEventListener('keydown', handleEscape)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            document.removeEventListener('keydown', handleEscape)
            document.body.style.overflow = 'unset'
        }
    }, [openbasket])
 

    return(
        <div className='header_corzina'>
            <button className='header_button' onClick={() => setOpenbasket(!openbasket)}><img src="" alt="" srcset="" /></button>
                {basketCount > 0 && (
                <span className="cart-count-mobile">{basketCount}</span>)}
           
                {openbasket && (
                <div ref={basketRef}>
                    {basketCount === 0 ? (
                        <div className='bascetblocnull'>
                            <p>Корзина пуста</p>
                        </div>
                    ) : (
                        <div className='bascetbloc'>
                            {basket.map(item => (
                                <div className='product' key={item.id}>
                                    <img src={item.image} alt="" />
                                    <p className='producttitle'>{item.title}</p>
                                    <p className='productprice'>{item.price}</p>
                                    <p className='productquantity'>{item.quantity}</p>
                                    <button 
                                        className='productbutton' 
                                        type="button" 
                                        onClick={() => deleteboock(item.id)}
                                    >
                                        X
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
            
        </div>
    )
}

export default Basket;