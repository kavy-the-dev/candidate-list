import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CandidateCard from './CandidateCard';
import './candidate.css';
const CandidateList = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:5000/api/candidates');
      setCandidates(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="candidate-list">
      {candidates.map(candidate => (
        <CandidateCard
          key={candidate._id}
          candidateName={candidate.candidate_name}
          partyName={candidate.party_name}
          imageURL={candidate.imageURL}
        />
      ))}
    </div>
  );
};

export default CandidateList;
