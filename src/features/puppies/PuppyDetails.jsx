// src/features/puppies/PuppyDetails.jsx

// import React from 'react';
import PropTypes from 'prop-types';

export const PuppyDetails = ({ selectedPuppyId }) => {
  // Component implementation
  return (
    <div>
      {/* Render details of the selected puppy */}
      {selectedPuppyId ? (
        <div>
          <h2>Puppy Details</h2>
          {/* Details content */}
        </div>
      ) : (
        <p>Select a puppy to see details</p>
      )}
    </div>
  );
};

PuppyDetails.propTypes = {
  selectedPuppyId: PropTypes.number,
  setSelectedPuppyId: PropTypes.func.isRequired,
};

export default PuppyDetails;
