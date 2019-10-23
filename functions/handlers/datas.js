const { db } = require('../util/admin');
const config = require('../util/config');
const firebase = require('firebase');

firebase.initializeApp(config);
exports.getAllClients = (req, res) =>{
    db.collection('client_data')
        .get()
        .then( data => {
            let clients = [];
            data.forEach( doc => {
                clients.push({
                    clientsId: doc.id,
                    age: doc.data().age_diff,
                    foods: doc.data().food_type,
                    date: new Date().toISOString(),
                    typeplace: doc.data().org_place,
                    place: doc.data().org_place_hotel,
                    postdate: new Date().toISOString(),
                    relation: doc.data().relation,
                    amounted: doc.data().saisong_recommend,
                    salaries: doc.data().sal
                });
            });
            return res.json(clients);
        })
        .catch( err => {
            console.error(err);
            res.status(500).json({ error: err.code });
        });
}

exports.getAllFoods = (req, res) => {
    db.collection('food_types')
        .get()
        .then(data => {
            let foodTypes = [];
            data.forEach( doc => {
                foodTypes.push({
                  foodtypeId: doc.id,
                  title: doc.data().title,
                  count: doc.data().percent  
                });
            });
            return res.json(foodTypes);
        })
        .catch( err => {
            console.error(err);
            res.status(500).json({ error: err.code });
        });
}

exports.getAllRelations = (req, res) => {
    db.collection('relation').get()
        .then( data => {
            let relations = [];
            data.forEach( doc => {
                relations.push({
                    relationId: doc.id,
                    title: doc.data().title,
                    count: doc.data().value
                });
            });
            return res.json(relations);
        })
        .catch( err => {
            console.error(err);
            res.status(500).json({ error: err.code });
        });
}

exports.getAllPlaces = (req, res) =>{
    db.collection('places').get()
        .then( data => {
            let places = [];
            data.forEach( doc => {
                places.push({
                  placeId: doc.id,
                  title: doc.data().title,
                  baseCount: doc.data().base_lak,
                  mounted: doc.data().percent  
                });
            });
            return res.json(places);
        })
        .catch( err => {
            console.error(err);
            res.status(500).json({ error: err.code });
        });
}