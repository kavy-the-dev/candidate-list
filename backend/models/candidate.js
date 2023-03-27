  const mongoose = require('mongoose');

  const candidateSchema = new mongoose.Schema({
    candidate_name: String,
    party_name: String,
    imageURL: String
  }, {
    image: true,
    collection: 'candidate'
  });
  
  const Candidate = mongoose.model('Candidate', candidateSchema);
  
  module.exports = Candidate;
  