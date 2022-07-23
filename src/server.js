// formato ecma6
import express from 'express';
import bodyParser from 'body-parser';

import routes from './routes/index.js';
//import { log } from './middlewares/log.js';

import './database/connect1.js';

export const app = express();

// o app.use na verdade está injetando um middleware
app.use(bodyParser.json());

//app.use(log);

routes(app);

const serverCallback = () => {
  console.log('🚀🚀 Server Started!')
}

export default function( port = 3000, callback = serverCallback ) {
  app.listen(port, callback);
}
