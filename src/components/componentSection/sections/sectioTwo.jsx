import './styleSectionTwo.css'
import Carta from './carta/carta'

function SectionTwo() {
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
                <Carta/>
                <Carta/>
                <Carta/>
                <Carta/>
                <Carta/>
                <Carta/>
            </div>
            <button className='more' type="button">Показать ещё</button>
        </div>
        </>
    )
}

export default SectionTwo;

