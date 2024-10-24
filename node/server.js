import express from 'express';
import cors from 'cors';
import router from './routes/router.js';

const app = express();

app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    })
);

app.use('/', router);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo correcto en http://localhost:${PORT}`);
});