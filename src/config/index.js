//This file contains 3 parameters
//1 The port for the app to listen on
//2 The connection string for the database
//3 The size limit for the json passed in
export default {
    "port": 3005,
    "mongoUrl": 'mongodb://localhost:27017/gyms',
    "bodyLimit": '100kb'
}