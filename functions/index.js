const functions = require("firebase-functions");
const app = require("express")();
const {
  getAllClients,
  getAllFoods,
  getAllRelations,
  getAllPlaces
} = require("./handlers/datas");

//Clients Route******************************************
app.get("/clients", getAllClients);
//TODO: ***********************
//Get By ID:
//Update By ID:
//Del

//Food Types Route***************************************
app.get("/foods", getAllFoods);
//TODO: ***********************
//Get By ID:
//Update By ID:
//app.get('/food/${id}', getById)
//Del

//Relation Route*****************************************
app.get("/relations", getAllRelations);
//TODO: ***********************
//Get By ID:
//Update By ID:
//Del

//Place Router*******************************************
app.get("/places", getAllPlaces);
//TODO: ***********************
//Get By ID:
//Update By ID:
//Del
exports.api = functions.https.onRequest(app);
