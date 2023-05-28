import serviceImg from '../../assets/images/3.jpg';
import Hero from '../../components/Hero';

const Service = () => {
    return (
        <>
            <Hero
                cName="hero-mid" 
                heroImg={serviceImg} 
                title="Service" 
                // text="Choose Your Favourite Destination."
                url="/"
                btnClass="hide"
            />
        </>
    );
}

export default Service;
