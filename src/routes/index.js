import express from 'express';
import config from '../config';
import gym from '../controller/gym';
import initializeDb from '../db';

let router = express();

initializeDb(db=>{
    router.use('/gym', gym({config,db}));
});

export default router;