import express from "express"
import authRoutes from "./routes/auth.routes.js"
import tableManagement from "./routes/tableMangement.routes.js"
import 'dotenv/config'

const port = 3000

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/auth', authRoutes)
app.use('/api/table',tableManagement)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});