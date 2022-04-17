import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';
import './Cource.css';

const Cource = ({cource}) => {
  const {image, title, details, fee} = cource;
  return (
    <div className='cource'>
      <img src={image} alt="" />
      <h4>{title}</h4>
      <p><small>{details}</small></p>
      <h2>${fee}</h2>
      <Link className='tutor-btn' to="/checkout">Enroll Now <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></Link>
    </div>
  );
};

export default Cource;