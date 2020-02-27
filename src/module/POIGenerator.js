define(function (require) {

    'use strict';

    var
        logUtil = require('LogUtil');

    function generatePropertiesObject() {

        var obj = {
            "Status": "Ej Registrerat",
            "Rapporterad": "2019-10-12 10.07",
            "Adress": "Strandgatan 98B",
            "Klassificering": "Felanm/Klotter/Klotter/",
            "className": "test",
            "id": "665691"
        };

        return obj;
    }

    function generateID() {
        return new Date().getTime();
    }

    return {

        getMapDataWithPOI: function (aMapArray) {

            var newArray = [],
                generatedID,
                address;

            for (var i = 0; i < aMapArray.length - 1; i++) {

                address = aMapArray[i];
                //generatedID = generateID();
                generatedID = i;

                try {

                    if (address !== null) {
                        address.id = "POI_ARENDE_" + generatedID;
                    } else {
                        continue;
                    }

                    if (address.properties !== null) {
                        address.properties.id = "" + generatedID;
                    }

                    newArray.push(address);

                } catch (e) {
                    logUtil.error('Could not change address data: ' + e);
                }
            }

            return newArray;
        }
    };
});