import mongoose from 'mongoose';

//data model going to be used
let Schema = mongoose.Schema;

let gymSchema = new Schema({
    name :String,
    classes: String
});

export default gymSchema;

module.exports = mongoose.model('Gym',gymSchema);