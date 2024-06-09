import app from './app.js'
import { PORT } from './config.js';
app.listen(PORT)
console.log("El server se ejecuta en el puerto ", PORT);
