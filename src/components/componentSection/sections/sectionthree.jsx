import './sectionthreestyle.css'


function SectionTree (){
    return(
        <div className="SectionTree">
            <div className="SectionTree_content">
                <img src="src\assets\Star 2.png" alt="" srcset="" />
                <h1>Новая коллекция французских авторов</h1>
                
            </div>
            <div className="SectionTree_text">
                <p className='text'>Сложно сказать, почему акционеры крупнейших компаний призывают нас к новым свершениям, которые, в свою очередь, должны быть заблокированы в рамках своих собственных рациональных ограничений. </p>
                <p className='text'>Принимая во внимание показатели успешности, граница обучения кадров предопределяет высокую востребованность направлений прогрессивного развития.</p>
            </div>
            <button type="button">Ознакомиться</button>
        </div>
    );
};

export default SectionTree;