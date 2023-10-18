import './loadEnvironment.js';
import express, {type Express, type Request, type Response} from 'express';

// Initialize express
const app: Express = express();
const port = process.env.HOST_PORT ?? '3000';
const alumnes = ['Alan Matthew Angulo', 'Nahomy Fernanda Argueta', 'Brian Bautista', 'Alex Blay', 'Pol Condal', 'Gerard Du Pre'];
const uf = ['UF1', 'UF2', 'UF3', 'UF4', 'UF5', 'UF6', 'UF7'];
const totalAlumnes = alumnes.length;

app.get('/alumnes', (req: Request, res: Response) => res.json(alumnes));
app.get('/alumnes', (req: Request, res: Response) => res.json(uf));
app.get('/alumnes', (req: Request, res: Response) => res.json(totalAlumnes));
// eslint-disable-next-line arrow-body-style
app.get('/', (req: Request, res: Response) => {
	return res.send(
		{alumnes, uf, totalAlumnes});
});

app.listen(process.env.HOST_PORT, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${port}!`);
});

export default app;
