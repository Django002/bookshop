import './styleSectionTwo.css'
import Carta from './carta/carta'
import {Books} from './carta/boocksdate'
import {useState} from 'react'
    

function SectionTwo({add}) {

    const [visibleCount, setVisibleCount] = useState(6);
    const [countryFilter, setCountryFilter] = useState('all');
    
    
    function addbocks() {
        setVisibleCount(visibleCount + 6)
    }

    const filteredBooks = Books.filter(book => {
        if (countryFilter === 'all') return true;
        return book.country === countryFilter;
    });


    function handleCountryFilter(country) {
        setCountryFilter(country);
        setVisibleCount(6); 
    }

    return(
        <>
        <div className='SectionTwo_bloc'>
            <div className='SectionTwo_sort'>
                <span>Репродукции</span>
                <div className='sort'>
                    <button 
                    onClick={()=>handleCountryFilter('all')} 
                    className={`sotrbutton ${countryFilter === 'all'? 'active' : ''}`}>Все</button>
                    <button 
                    onClick={()=>handleCountryFilter('Франция')} 
                    className={`sotrbutton ${countryFilter === 'Франция'? 'active' : ''}`}>Франция</button>
                    <button 
                    onClick={()=>handleCountryFilter('Германия')} 
                    className={`sotrbutton ${countryFilter === 'Германия'? 'active' : ''}`}>Германия</button>
                    <button 
                    onClick={()=>handleCountryFilter('Англия')} 
                    className={`sotrbutton ${countryFilter === 'Англия'? 'active' : ''}`}>Англия</button>
                </div>
            </div>
            <div className='SectionTwo_bocks'>
               { filteredBooks.length === 0 ? (
                    <div className="no-books-message">
                        <p>Нет книг по этой категории</p>
                    </div>
               ) : filteredBooks.slice(0,visibleCount).map((book) => (
                <Carta
                 key={book.id} 
                 id={book.id} 
                 title={book.title}
                 author={book.author} 
                 genre={book.genre} 
                 price={book.price} 
                 country={book.country}
                 image={book.img}
                 add={add}
                 paperInfo={book.paperInfo}
                 description={book.description}
                 />))} 
            </div>

            {visibleCount < filteredBooks.length && (
            <button className='more' type="button" onClick={addbocks}>
            Показать ещё
            </button>
      )}
                
        </div>
        </>
    )
}

export default SectionTwo;

