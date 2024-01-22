import { app } from './app/app';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
