import mongoose from 'mongoose';
import config from './config';

export default callback=>{
    let db = mongoose.connect(process.env.MONGOLAB_URI ||config.mongoUrl);
    callback(db);
};