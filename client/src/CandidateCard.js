import React from 'react';
import './CandidateCard.css';

const CandidateCard = ({ candidateName, partyName, imageURL }) => {
  return (
    <div className="candidate-card">
      <img src={imageURL} alt={candidateName} />
      <h2>{candidateName}</h2>
      <h2>{partyName}</h2>
    </div>
  );
};

export default CandidateCard;
