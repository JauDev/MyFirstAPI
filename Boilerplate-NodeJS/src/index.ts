import './loadEnvironment.js';
import express, {type Express, type Request, type Response} from 'express';

// Initialize express
const app: Express = express();
const port = process.env.HOST_PORT ?? '3000';

// eslint-disable-next-line arrow-body-style
app.get('/', (req: Request, res: Response) => {
	return res.send({message: 'Hello World!'});
});

app.listen(process.env.HOST_PORT, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${port}!`);
});

export default app;
