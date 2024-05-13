import { useState } from 'react';
import PropTypes from 'prop-types';

function AdditionalDropdown({ isOpen,  }) {
  const [options] = useState([
    'Gestisci conversazioni',
    'Impostazioni messaggistica',
    'Posta in arrivo',
    'Imposta messaggio di assenza'
  ]);

  return isOpen ? (
    <div style={{ position: 'absolute', marginTop: '46rem', right: '30px', zIndex: '2', backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', borderRadius: '4px' }}>
      {options.map(option => (
        <p key={option} style={{ margin: '0', padding: '8px', cursor: 'pointer' }}>{option}</p>
      ))}
    </div>
  ) : null;
}

AdditionalDropdown.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default AdditionalDropdown;