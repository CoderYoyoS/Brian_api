import mongoose from 'mongoose';
import { Router } from 'express';
import Gym from '../model/gym';


export default ({config, db})=>{
    let api = Router();

    //'/v1/gym/add'
    api.post('/add',(res,req)=> {
        //mongoose model
        let newGym = new Gym();

        Gym.name = req.body.name;

        newGym.save(err=> {
            if(err){
                res.send(err);
            }

            res.json('message saved');
        });

    });

    return api;
}