const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bugRoutes = require('./Routes/bugRoutes');

const app = express();
const port = 3006;

mongoose.connect('mongodb://127.0.0.1:27017/bugReportDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.log('Error connecting to MongoDB:', err));

app.use(bodyParser.json());

app.use('/', bugRoutes);

app.get('/', (req, res) => {
  res.send('🛠️ Bug Reporting System API is running. Use POST /bugs or GET /bugs');
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
