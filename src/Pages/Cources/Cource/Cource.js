import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';
import './Cource.css';
import { addToDb } from '../../../LocalStorage/LocalStorage';

const Cource = ({cource}) => {
  const {id, image, title, details, fee} = cource;

  const addToLocalStorage = (id) => {
    addToDb(id);
  }

  return (
    <div className='cource'>
      <img src={image} alt="" />
      <h4>{title}</h4>
      <p><small>{details}</small></p>
      <h2>${fee}</h2>
      <Link className='tutor-btn' to="/checkout" onClick={() => addToLocalStorage(id)}>Enroll Now <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></Link>
    </div>
  );
};

export default Cource;