import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import config from './config';
import router from './router';
import routes from './routes';

const app = express();

app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());

routes(router(app));

process.on('uncaughtException', err => (console.error(err), process.exit(1)));

app.listen(config.get('port'), config.get('ip'), () => console.log('Listening...'));
