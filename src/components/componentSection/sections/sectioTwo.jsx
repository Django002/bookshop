import './styleSectionTwo.css'
import Carta from './carta/carta'
import {Books} from './carta/boocksdate'
import { useState} from 'react'
    

function SectionTwo({add}) {

    const [visibleCount, setVisibleCount] = useState(6);
    
    function addbocks() {
        setVisibleCount(visibleCount + 6)
    }

    

    





    return(
        <>
        <div className='SectionTwo_bloc'>
            <div className='SectionTwo_sort'>
                <span>Репродукции</span>
                <div className='sort'>
                    <button>Франция</button>
                    <button>Германия</button>
                    <button>Англия</button>
                </div>
            </div>
            <div className='SectionTwo_bocks'>
               {Books.slice(0,visibleCount).map((book) => (
                <Carta
                 key={book.id} 
                 id={book.id} 
                 title={book.title}
                 author={book.author} 
                 genre={book.genre} 
                 price={book.price} 
                 country={book.country}
                 image={book.image}
                 add={add}
                 />))} 
            </div>
            {visibleCount < Books.length && (<button className='more' type="button" onClick={addbocks} >Показать ещё</button>)}
                
            
            
        </div>
        </>
    )
}

export default SectionTwo;

