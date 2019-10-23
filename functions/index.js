const functions = require('firebase-functions');
const app = require('express')();
const { 
    getAllClients,
    getAllFoods,
    getAllRelations,
    getAllPlaces
     } = require('./handlers/datas');


//Clients Route******************************************
app.get('/clients', getAllClients );

//Food Types Route***************************************
app.get('/foods', getAllFoods);

//Relation Route*****************************************
app.get('/relations', getAllRelations);
//Place Router*******************************************
app.get('/places', getAllPlaces);
exports.api = functions.https.onRequest(app);
