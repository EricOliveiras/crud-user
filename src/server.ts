import { app } from './app';
import { port } from './config/vars';

app.listen(port, () => console.log(`Server is running in port ${port}! 🚀`));