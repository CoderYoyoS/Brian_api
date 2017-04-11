import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';


import config from './config';
import routes from './routes';


let app = express();

app.server = http.createServer(app);

//middleware
//parse application/json
app.use(bodyParser.json({
    //limit the size of the data passed in
    limit : config.bodyLimit
}));

//any request that comes in on /gym go to routes
app.use('/gym',routes);

//telling the server to listen of port
app.server.listen(process.env.PORT || 5000);

//logging port to the console
console.log(`stated server on port ${app.server.address().port}`);

//only works with import
export default app;