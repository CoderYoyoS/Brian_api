//This file contains 3 parameters
//1 The port for the app to listen on
//2 The connection string for the database
//3 The size limit for the json passed in

/**
 * mLab URL ready for implementation
 */
// 'mongodb://coderyoyo:admin@ds159050.mlab.com:59050/chatbotdb'
export default {
    "port": 5000,
    "mongoUrl": 'mongodb://coderyoyo:admin@ds159050.mlab.com:59050/chatbotdb',
    "bodyLimit": '100kb'
}