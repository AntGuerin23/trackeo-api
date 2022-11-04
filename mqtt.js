const mqttLibrary = require("mqtt");
const connectionUrl = `mqtt://trackeo_broker:1883`;

exports.askForLocation = function() {
    const client = mqttLibrary.connect(connectionUrl,{
        clean: true,
        connectTimeout: 4000,
        reconnectPeriod: 100
    });
    console.log('start');
    client.publish('locations', 'refresh');
    //client.end();
    console.log('exiting...');
}

function setupClient() {
    const mqttLibrary = require("mqtt");
	const connectionUrl = `mqtt://localhost:1883`;
	const client = mqttLibrary.connect(connectionUrl,{
		clean: true,
		connectTimeout: 4000,
		reconnectPeriod: 100
	});
    return client;
}
