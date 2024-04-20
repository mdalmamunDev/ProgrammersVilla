import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import proRouter from './routes/programmer.route.js';
import cors from 'cors';

const app = express()

dotenv.config();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

//connect to mongoDB
try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  console.log("Connected to mongoDB");
} catch (error) {
  console.log("Error:", error);
}

//defining routes
app.get('/', (req, res) => {
  res.send('ProgrammersVilla')
});
app.use("/programmer", proRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
})