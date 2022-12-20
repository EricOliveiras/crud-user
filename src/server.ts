import 'express-async-errors';
import { app } from './app';
import { port } from './config';

app.listen(port, () => console.log(`Server is running in port ${port}! 🚀`));