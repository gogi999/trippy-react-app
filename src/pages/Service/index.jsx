import serviceImg from '../../assets/images/3.jpg';
import Hero from '../../components/Hero';
import Trip from '../../components/Trip';

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
            <Trip />
        </>
    );
}

export default Service;
