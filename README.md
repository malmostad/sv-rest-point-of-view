# REST-app-maps
REST API returning a json object needed for the Malmo map service to render pointers at the map.

## Setup
* `checkout from git`
* `npm install`
* `npm run setup`
## Building
* `npm run create-addon` create an addon with the name configured in the setup task
* `npm run zip` compress `/src` into `/dist`
* `npm run deploy` compress `/src` into `/dist` and upload to the addon configured in the setup task
* `npm run force-deploy` compress `/src` into `/dist` and upload to the addon configured in the setup task. This will overwrite the current WebApp if it has the same version and id defined in manifest.json
* `npm run sign` compress `/src` into `/dist` and invoke the signing endpoint of the SiteVision developer REST API. A signed version of the WebApp will be created in the `/dist` folder
* `npm run prod-deploy` deploy the signed WebApp to a production environment

[Visit developer.sitevision.se for more information](https://developer.sitevision.se)

---

## How to use
REST API with endpoint /getmapdata/:addressData there :addressData is a base64 encoded string containing splitable address data. Each address needs an ajax request to get json data about the address. Every address needs an POI id, which POIGenerator adds to the object.