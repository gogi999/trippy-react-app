import contactImg from '../../assets/images/2.jpg';
import Hero from '../../components/Hero';

const Contact = () => {
    return (
        <>
            <Hero 
                cName="hero-mid" 
                heroImg={contactImg} 
                title="Contact" 
                // text="Choose Your Favourite Destination."
                url="/"
                btnClass="hide"
            />
        </>
    );
}

export default Contact;
