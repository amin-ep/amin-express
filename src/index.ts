import aminexpress from './aminExpress.js';
import { config } from 'dotenv';

config({ path: '.env' });

const app = aminexpress();

const port = process.env.PORT || 8000;

app.listen(Number(port), () => {
  console.log(
    `App is running on port ${port} and app mode is ${process.env.NODE_ENV}`
  );
});
