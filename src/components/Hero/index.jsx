import './index.css';

import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Hero = ({ cName, heroImg, title, text, url, btnClass, btnText }) => {
  return (
    <>
      <div className={cName}>
        <img src={heroImg} alt="hero-img" />
        <div className="hero-text">
          <h1>{title}</h1>
          <p>{text}</p>
          <Link to={url} className={btnClass}>
            {btnText}
          </Link>
        </div>
      </div>
    </>
  );
}

export default Hero;
