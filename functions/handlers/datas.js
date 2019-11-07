const { db } = require('../util/admin');
const config = require('../util/config');
//fire base initialization
const firebase = require('firebase');
firebase.initializeApp(config);

//Export Client to index
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
// exports.getCountClient = ( req, res ) => {
//     let age_diff = [];
//     db.collection('client_data').get().where(
//         'age_diff', '==', 'ອາຍຸເທົ່າກັບ ຄູ່ເຈົ້າບ່າວເຈົ້າສາວ' && 
//         'age_diff', '==', 'ອາຍຸນ້ອຍກວ່າ ຄູ່ເຈົ້າບ່າວເຈົ້າສາວ' && 
//         'age_diff', '==', 'ອາຍຸຫຼາຍກວ່າ ຄູ່ເຈົ້າບ່າວເຈົ້າສາວ')
//     .then().doc().count(age_diff).res(json);
// }


// export const clientWriteListener = 
//     functions.firestore.document('client_data/{clientUid}')
//     .onWrite((change, context) => {

//     if (!change.before.exists) {
//         // New document Created : add one to count

//         db.doc(docRef).update({numberOfDocs: FieldValue.increment(1)});

//     } else if (change.before.exists && change.after.exists) {
//         // Updating existing document : Do nothing

//     } else if (!change.after.exists) {
//         // Deleting document : subtract one from count

//         db.doc(docRef).update({numberOfDocs: FieldValue.increment(-1)});

//     }

// return;
// });
//Export Food Types to index
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
//Export Relation to index
exports.getAllRelations = (req, res) => {
    db.collection('relations')
        .get()
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
//Export Places to index
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

