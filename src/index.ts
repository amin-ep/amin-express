import aminexpress from './AminExpress.js';
import { config } from 'dotenv';

config({ path: '.env' });

const app = aminexpress();

const port = Number(process.env.PORT) || 8080;

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
