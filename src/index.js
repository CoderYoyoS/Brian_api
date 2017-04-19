import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import config from './config';
import routes from './routes';

let app = express();

app.server = http.createServer(app);

app.use(bodyParser.json({
    limit : config.bodyLimit
}));

app.use(routes);

app.server.listen(process.env.PORT || config.port);

console.log(`stated server on port ${app.server.address().port}`);

export default app;