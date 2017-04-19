import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let gymSchema = new Schema({
    classes: String
});

export default gymSchema;

module.exports = mongoose.model('gyms',gymSchema);