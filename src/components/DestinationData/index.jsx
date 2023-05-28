import '../Destination/index.css';

// eslint-disable-next-line react/prop-types
const DestinationData = ({ heading, text, img1, img2 }) => {
  return (
    <div className="first-desc">
      <div className="desc-text">
        <h2>{heading}</h2>
        <p>{text}</p>
      </div>
      <div className="image">
        <img src={img1} alt="img" />
        <img src={img2} alt="img" />
      </div>
    </div>
  );
}

export default DestinationData;
