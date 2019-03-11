/// <reference path="./node_modules/tns-platform-declarations/android.d.ts" />
import { Common } from './NSYelpApi.common';

export class NSYelpApi extends Common {
  _client: com.yelp.fusion.client.connection.YelpFusionApi;
  constructor(apiKey: string) {
    super();
    this._client = new com.yelp.fusion.client.connection.YelpFusionApiFactory().createAPI(apiKey);
    console.dir(this._client);
    // console.dir(com.yelp.fusion.client.BuildConfig.APPLICATION_ID);
    // console.dir(com.yelp.fusion.client.connection);
    // console.dir(com.yelp.fusion.client);
    // console.dir(new com.yelp.fusion.client());
    // let test = new com.yelp.fusion.client.connection.YelpFusionApiFactory();
    // console.dir(test);
    // this._client = test.createAPI(apiKey);
  }

  businessSearchWithId() {
    return new Promise((r, p) => {
      r();
    });
    // console.log(this._client.getPhoneSearch(phone));
  }
}
