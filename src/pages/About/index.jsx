import aboutImg from '../../assets/images/night.jpg';
import Hero from '../../components/Hero';

const About = () => {
    return (
        <>
            <Hero 
                cName="hero-mid" 
                heroImg={aboutImg} 
                title="About" 
                // text="Choose Your Favourite Destination."
                url="/"
                btnClass="hide"
            />
        </>
    );
}

export default About;
