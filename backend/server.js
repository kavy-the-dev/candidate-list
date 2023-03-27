const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 5000;

// connect to MongoDB
mongoose.connect(process.env.DATABASE,{
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('DB Connected'));

// import the Candidate model
const Candidate = require('./candidate');

// use middleware
app.use(bodyParser.json());
app.use(cors());

// create a route for adding a candidate
app.post('/api/addcandidate', async (req, res) => {
  const { candidate_name, party_name, imageURL } = req.body;
  try {
    const candidate = new Candidate({
      candidate_name,
      party_name,
      imageURL
    });
    await candidate.save();
    res.status(201).json({ message: 'Candidate added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to add candidate' });
  }
});

app.get('/api/candidates', async (req, res) => {
  try {
    const candidates = await Candidate.find();
    res.status(200).json(candidates);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get candidates' });
  }
});


// start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});