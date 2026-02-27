import './sectionfourstyle.css'
import ramca from '../../../assets/Group210.png';
import cartina1 from "../../../assets/Ellipse30.png";
import cartina2 from "../../../assets/Ellipse31.jpg";
import cartina3 from "../../../assets/Ellipse32.jpg";

function Sectionfour() {
    return(
        <div className='Sectionfour'>
            <img className='Sectionfourimg' src={ramca} alt="" srcset="" />
            <div className='Sectionfour_content'>
                <h2>Наша команда</h2>
                <p>Значимость этих проблем настолько очевидна, что базовый вектор развития позволяет оценить значение экспериментов, поражающих по своей масштабности и грандиозности. Мы вынуждены отталкиваться от того, что консультация с широким активом.</p>
                <div className='Sectionfour_contentimg'>
                    <img src={cartina1} alt="" />
                    <img src={cartina2} alt="" />
                    <img src={cartina3} alt="" />
                </div>
            </div>
        </div>
    );
};


export default Sectionfour;