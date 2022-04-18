import React, { useState } from 'react';
import useCources from '../../Hooks/useCources';
import Cource from './Cource/Cource';
import './Cources.css';

const Cources = () => {
  const [cources] = useCources();
  const [checkout, setCheckout] = useState([]);

  const handleEnrollButton = (cource) => {
    const newCheckout = [...checkout, cource];
    setCheckout(newCheckout)
  }

  return (
    <section className='cources-container'>
      <h3>Cources</h3>
      <hr />
      <div className="cources">
        {
          cources.map( cource => <Cource
            key={cource.id}
            cource={cource}
            handleEnrollButton={handleEnrollButton}
          ></Cource>
          )
        }
      </div>
    </section>
  );
};

export default Cources;