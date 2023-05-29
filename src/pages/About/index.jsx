import aboutImg from '../../assets/images/night.jpg';
import AboutUs from '../../components/AboutUs';
import Hero from '../../components/Hero';

const About = () => {
    return (
        <>
            <Hero 
                cName="hero-mid" 
                heroImg={aboutImg} 
                title="About" 
                url="/"
                btnClass="hide"
            />
            <AboutUs />
        </>
    );
}

export default About;
