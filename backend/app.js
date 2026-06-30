import express from "express"
import authRoutes from "./routes/auth.routes.js"
import 'dotenv/config'

const port = 3000

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/auth', authRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});