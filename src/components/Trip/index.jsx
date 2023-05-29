import './index.css';

import trip1 from '../../assets/images/10.jpg';
import trip2 from '../../assets/images/2.jpg';
import trip3 from '../../assets/images/3.jpg';
import TripData from '../TripData';

const Trip = () => {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>
        You can discover unique
        destinations using Google Maps.  
      </p>
      <div className="trip-card">
        <TripData 
          image={trip1}
          heading="Trip in Indonesia"
          text="Indonesia, officially the Republic 
            of Indonesia, is a country in Southeast Asia
            and Oceania between the Indian and 
            Pacific oceans. It consists of over 17,000 
            islands, including Sumatra, Java, Sulawesi,
            and parts of Borneo and New Guinea."
        />
        <TripData 
          image={trip2}
          heading="Trip in Malaysia"
          text="Malaysia is a Southeast Asia country 
            occupying parts of the Malay Peninsula
            and the island of Borneo. It's known for its
            beaches, rainforests and mix of Malay,
            Chinese, Indian and European cultural
            influences."
        />
        <TripData 
          image={trip3}
          heading="Trip in France"
          text="France is Western Europe, encompasses
            medieval cities, alpine villages 
            and Mediterranian beaches. Paris, it's capital, is
            famed for its fashion houses, classical art
            museums including the Louvre and 
            monuments like the Eiffel Tower."
        />
      </div>
    </div>
  );
}

export default Trip;
