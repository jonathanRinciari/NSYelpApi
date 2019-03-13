import { Observable } from 'tns-core-modules/data/observable';
import { NSYelpApi } from 'nativescript-NSYelpApi';
import { YOUR_API_KEY } from '~/enviornment';
import { Business } from 'nativescript-NSYelpApi/typings/NSYelpApi';

export class HelloWorldModel extends Observable {
  public message: string;
  private api: NSYelpApi;

  constructor() {
    super();

    this.api = new NSYelpApi(YOUR_API_KEY);
    // this.api.businessSearchWithId('9MzzaGTQdvkhGKvUsLD2kw')
    //   .then((t) => console.log(t))
    //   .catch(err => console.error(err));

    this.api.searchWithQuery('New York City')
      .then((a: Business[]) => {
        console.log(a);
        console.log(a[0].name);
      });
  }
}
