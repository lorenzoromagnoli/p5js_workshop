var discoveryButton = document.getElementById('discover')

discoveryButton.addEventListener('pointerup', function(event) {
    // Call navigator.bluetooth.requestDevice
    searchDevice();
});

function searchDevice() {
    filters: []

    options = {};
    options.acceptAllDevices = true;
    options.optionalServices= ['19b10010-e8f2-537e-4f6c-d104768a1214']

    console.log('Requesting Bluetooth Device...');
    console.log('with ' + JSON.stringify(options));

    navigator.bluetooth.requestDevice(options)
        .then(device => {

            console.log('> Name:             ' + device.name);
            console.log('> Id:               ' + device.id);
            console.log('> Connected:        ' + device.gatt.connected);

            $('#name').val(device.name);

            // Attempts to connect to remote GATT Server.
            return device.gatt.connect();

        })
        .then(server => {
            // Note that we could also get all services that match a specific UUID by
            // passing it to getPrimaryServices().
            console.log('Getting Services...');
            return server.getPrimaryServices();
        })
        .then(services => {
            console.log('Getting Characteristics...');
            let queue = Promise.resolve();
            services.forEach(service => {
                queue = queue.then(_ => service.getCharacteristics().then(characteristics => {
                    console.log('> Service: ' + service.uuid);
                    characteristics.forEach(characteristic => {
                        console.log('>> Characteristic: ' + characteristic.uuid + ' ' +
                            getSupportedProperties(characteristic));
                            characteristic.startNotifications()
                            characteristic.addEventListener('characteristicvaluechanged',
                                characteristic_updated);
                            // Reading Battery Level...
                            return characteristic.readValue();
                    });
                }));
            });
            return queue;
        })
        .catch(error => {
            console.log('Argh! ' + error);
        });
}

function characteristic_updated(event) {
  if (event.target.uuid=='19b10011-e8f2-537e-4f6c-d104768a1214'){
    console.log("shake detected");
    mangia();
  }else if(event.target.uuid=='19b10012-e8f2-537e-4f6c-d104768a1214'){
    console.log("orientation change detected");
    console.log(event.target.value.getInt8());
    muoviPiccione(event.target.value.getInt8());
  }
}


/* Utils */


function isWebBluetoothEnabled() {
    if (navigator.bluetooth) {
        return true;
    } else {
        ChromeSamples.setStatus('Web Bluetooth API is not available.\n' +
            'Please make sure the "Experimental Web Platform features" flag is enabled.');
        return false;
    }
}


function getSupportedProperties(characteristic) {
  let supportedProperties = [];
  for (const p in characteristic.properties) {
    if (characteristic.properties[p] === true) {
      supportedProperties.push(p.toUpperCase());
    }
  }
  return '[' + supportedProperties.join(', ') + ']';
}
