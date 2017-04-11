import { Router } from 'express';
import Gym from '../model/gym';

export default ({config, db})=>{
    let api = Router();


    //route 1 get day for classes
    api.get('/classes/:pickedDay',function(req,res){

        let dayPicked = req.params.pickedDay;

        Gym.find({day: dayPicked}, function(err,gym){
            if(err){
                res.send(err);
            }

            let jsonString = gym;
            let json = JSON.stringify(jsonString);
            json = JSON.parse(json);

            let message = '';
            for(let i =0; i<4; i++){
                message += json[0]['class'][i] + '\n';
            }

            res.send(json[0]['day']+ ' classes are:\n'+ message);
        });
    });

    //route 2 get the times
    api.get('/time',(req,res)=>{
        res.send('- Gym Open Hours -\nMondays 8am-7:30pm\nTuesdays 8am-7.30pm\nWednesdays 8am-7:30pm\nThursdays 8am-7:30pm\nFridays 8am-7:30pm\nSaturdays 10am - 2pm\nSundays Closed');
    });

    return api;
}