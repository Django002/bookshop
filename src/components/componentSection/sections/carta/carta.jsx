import './stylecarta.css'


function Carta(props){
    const {id,title,author,price,image,add} = props

    const handleClick = () => {
        const book = {
            id: id,
            title: title,
            author: author,
            price: price,
            image: image
        };
        
        add(book);
    };


    return(
        <div className='cartra'>
            <div className='cartra_content' key={id}>
                <img src={image || null} alt="" srcset="" />
                <p className='cartra_avtor'>{author}</p>
                <h3 className='cartra_bockname'>{title}</h3>
                <p className='cartra_opisani'>Холст, масло (50х80) </p>
                <p className='cartra_price'>{price} руб</p>
                <button className='cartra_button' type="button" onClick={() => handleClick()}>В корзину</button>
            </div>
                    
        </div>
    );
};

export default Carta;