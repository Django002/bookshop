import './styleSectionTwo.css'

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
                <div className='cartra'>
                    <div className='cartra_content'>
                        <img src="" alt="" srcset="" />
                        <span className='cartra_content'>Марсель Руссо</span>
                        <h3 className='cartra_content'>Охота Амура</h3>
                        <span className='cartra_content'>Холст, масло (50х80) </span>
                        <span className='cartra_content'>14 500 руб</span>
                        <button className='cartra_content' type="button"></button>
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}

export default SectionTwo;

