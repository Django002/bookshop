import './stylecarta.css'
import Modalcart from './cartmodal/modalcart'
import { useState} from 'react'


function Carta(props){
    const {id,title,author,price,image,add,paperInfo,description} = props
    const [modalopen, setModalopen] = useState(false)


    const handleClick = (e) => {
        e.stopPropagation();
        const book = {
            id: id,
            title: title,
            author: author,
            price: price,
            image: image
        };
        
        add(book);
    };

    const socrashni = (title) => {
        if (title.length > 20) {
            return title.slice(0,20) + '...'; 
        } else {
            return title
        }
    }

    const closeModal = () => {
        setModalopen(false);
    }

    return(
        <div>
            <div className='cartra' onClick={() => setModalopen(true)}>
                <div className='cartra_content' key={id}>
                    <img src={image} alt="" srcset="" />
                    <p className='cartra_avtor'>{author}</p>
                    <h3 className='cartra_bockname'>{socrashni(title)}</h3>
                    <p className='cartra_opisani'>{paperInfo} </p>
                    <p className='cartra_price'>{price} руб</p>
                    <button className='cartra_button' type="button" onClick={handleClick}>В корзину</button>
                </div>       
            </div>
            
            <Modalcart 
                id={id}
                title={title}
                author={author}
                price={price}
                image={image}
                paperInfo={paperInfo}
                onClose={closeModal}
                addToCart={handleClick}
                description={description}
                isOpen={modalopen}
            />
            
        </div>
        
        
    );
};

export default Carta;