const express = require('express');
const cors =require('cors')
require('dotenv').config()
const connectDB = require('./config/db');
const cardRoutes = require('./routes/cardRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors())

app.get('/ping', (req, res) => {
    res.send('Server is running');
});


app.use('/', cardRoutes);


app.use(errorHandler);


app.listen(port, async() => {

    await connectDB();
  
    console.log(`Server running at http://localhost:${port}`);
});
