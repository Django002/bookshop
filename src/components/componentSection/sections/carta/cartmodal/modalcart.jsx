import React, { useEffect } from 'react';
import "./modalcart.css";

function Modalcart(props) {
    const {title,author,price,image,addToCart,onClose,description,isOpen} = props;

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.body.style.width = '100%';
            
            const handleEsc = (e) => {
                if (e.key === 'Escape') onClose();
            };
            document.addEventListener('keydown', handleEsc);
            
            return () => {
                document.body.style.overflow = 'auto';
                document.body.style.position = '';
                document.body.style.width = '';
                document.removeEventListener('keydown', handleEsc);
            };
        }
    }, [isOpen, onClose]);

    const handleContentClick = (e) => {
        e.stopPropagation(); 
    };

    const handleAddToCart = (e) => {
        e.stopPropagation();
        addToCart(e);
    };

    return (
        <div className={`bacgroundbloc ${isOpen ? 'modal-open' : 'modal-closed'}`} onClick={onClose}>
            <div className="bloc" onClick={handleContentClick}>
                <img src={image} alt={title} />
                <div className="contentbloc">
                    <button className="clovsemodal" onClick={onClose}>X</button>
                    <p className="titlebook">{title}</p>
                    <p className="descriptionbook">{description}</p>
                    <div className="avtorbook">
                        <p className="authorbook">{author}</p>
                    </div>
                    <div className="blockadd">
                        <p className="pricebook">{price} руб</p>
                        <button className="addbook" onClick={handleAddToCart}>В корзину</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modalcart;