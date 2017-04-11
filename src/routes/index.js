import express from 'express';
import config from '../config';
import middleware from '../middleware';
import gym from '../controller/gym';
// this create the database connection
import initializeDb from '../db';

let router = express();

//connect to db
initializeDb(db=>{
    //internal middleware
    router.use(middleware({config,db}));
    router.use('/gym', gym({config,db}));

});


export default router;