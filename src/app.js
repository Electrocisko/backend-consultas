import express from 'express';
import personsRouter from './routes/persons.router.js'


const app = express();
const PORT= 8080;


const server = app.listen(PORT, () => console.log(`servidor escuhando en http://localhost:${PORT}`));
server.on('error', (error) => console.log('Error en servidor',error));


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', personsRouter);
app.use(express.static('public'));

