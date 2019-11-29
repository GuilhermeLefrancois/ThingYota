const path = require('path');
const fs = require('fs');

// settings:
const settings = JSON.parse(fs.readFileSync(path.resolve(__dirname,'settings.json'),'utf-8'));
const mqtt = require('mqtt');

// connecção com o broken
const client = mqtt.connect(settings.mqtt.client.url);

client.on('connect', function () {
    client.subscribe('mqtt/presence', function (err) {
        if (!err) {
            // TODO: Buscar a lista de usuários conectados
            client.publish('mqtt/logs','server side is on');
        }
    })
})

// callback que lé os dados e insere no banco de dados
function pushData(topic,message) {
    // TODO: MongoDB recebe os dados
    message.map((el) => {
        Collection.update({
            _id: el.mac,
            time: el.time,
            status: el.status
        });
    })
}

// evento leitura de topic
client.on('message', pushData);


// var mqtt = require('mqtt'); //includes mqtt server 
// var mongodb = require('mongodb'); // includes mongoDB 
// var mongodbClient = mongodb.MongoClient; //initialises the mongoDB client
// var mongodbURI = 'mongodb://localhost:27017/TempMonitor'; //activating the MongoDB port 27017, here TempMontor is the name of the database
// var deviceRoot = "demo/device/"; //deviceroot is topic name given in arduino code 
// var collection, client; //initialise collection and client

// mongodbClient.connect(mongodbURI, setupCollection); //connect the database with collecion

// function setupCollection(err, db) {
//     if (err) throw err;
//     collection = db.collection("test_mqtt"); //name of the collection in the database
//     client = mqtt.connect({ host: 'localhost', port: 1883 }); //connecting the mqtt server with the MongoDB database
//     client.subscribe(deviceRoot + "+"); //subscribing to the topic name 
//     client.on('message', insertEvent); //inserting the event
// }

// //function that displays the data in the MongoDataBase
// function insertEvent(topic, message) {
//     var key = topic.replace(deviceRoot, '');

//     collection.update(
//         { _id: key },
//         { $push: { events: { event: { value: message, when: new Date() } } } },
//         { upsert: true },

//         function (err, docs) {
//             if (err) {
//                 console.log("Insert fail")// Improve error handling		
//             }
//         }

//     );

// }