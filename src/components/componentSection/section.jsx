import SectionOne from './sections/sectionOne.jsx'
import SectionTwo from './sections/sectioTwo.jsx'
import SectionTree from './sections/sectionthree.jsx'
import Sectionfour from './sections/sectionfour.jsx'
import Footer from './footer.jsx'


function Section({add}) {
    return(
        <>
            <SectionOne/>
            <SectionTwo add={add}/>
            <SectionTree/>
            <Sectionfour/>
            <Footer/>
        </>
    )
    
}

export default Section;