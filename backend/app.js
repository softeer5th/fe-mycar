const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');  // CORS 미들웨어 불러오기


// CORS 미들웨어 설정 (모든 도메인 허용)
const { errorHandler } = require('./middlewares/errorHandler');
const carRoutes = require('./routes/carRoutes');

// Load environment variables
dotenv.config();

const app = express();

app.use(cors());
// Middleware
app.use(morgan('dev')); // Log requests to the console
app.use(express.json()); // Parse incoming JSON requests

app.use('/test', (req,res)=>{
    res.json({
        "result": true
    })
})
// Routes
app.use('/api/car', carRoutes);

// Error handling middleware
app.use(errorHandler);

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
