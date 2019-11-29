const path = require('path');
const fs = require('fs');

// settings:
const settings = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'settings.json'), 'utf-8'));
const mqtt = require('mqtt');

// connecção com o broken
const client = mqtt.connect(settings.mqtt.client.url);

client.on('connect', function () {
    client.subscribe('mqtt/presence', function (err) {
        if (!err) {
            // TODO: Buscar a lista de usuários conectados
            client.publish('mqtt/logs', 'server side is on');
        }
    })
})

// callback que lé os dados e insere no banco de dados
function pushData(topic, message) {
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
