(function () {
    'use strict';

    var
        router = require('router'),
        appData = require('appData'),
        fileUtil = require('FileUtil'),
        endecUtil = require('EndecUtil'),

        logUtil = require('LogUtil');

    router.get('/updateFile', function (req, res) {

        var fileToUpdate = appData.getNode('fileToUpdate'),
            dataToUpdate = req.params.dataToUpdate,
            existingContent = fileUtil.getContentAsString(fileToUpdate),

            cleanedDataToUpdate,
            base64Data;

        if (dataToUpdate && dataToUpdate !== '') {
            cleanedDataToUpdate = endecUtil.decodeURL(dataToUpdate);
            cleanedDataToUpdate += existingContent;
            base64Data = endecUtil.base64encode(cleanedDataToUpdate);
            fileUtil.updateBinaryContentFromBase64(fileToUpdate, base64Data);
        }

    });

}());