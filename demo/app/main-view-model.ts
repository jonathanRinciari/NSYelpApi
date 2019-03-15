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

    const coordinates = {latitude: 41.313822, longitude: -72.91276};
    this.api.searchWithQuery(coordinates, null, false, 50, 9, null, 'best_match', 'pizza')
      .then((a) => console.log(a, 't'))
      .catch(err => console.log(err, 'a')); 
  }
}
