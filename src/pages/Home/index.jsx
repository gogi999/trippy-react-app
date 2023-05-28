import homeImg from '../../assets/images/12.jpg';
import Destination from '../../components/Destination';
import Hero from '../../components/Hero';

const Home = () => {
    return (
        <>
            <Hero 
                cName="hero" 
                heroImg={homeImg} 
                title="Your Journey Your Story" 
                text="Choose Your Favourite Destination."
                url="/"
                btnClass="show"
                btnText="Travel Plan"
            />
            <Destination />
        </>
    );
}

export default Home;
