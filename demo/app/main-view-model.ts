import { Observable } from 'tns-core-modules/data/observable';
import { NSYelpApi } from 'nativescript-NSYelpApi';
import { YOUR_API_KEY } from '~/enviornment';

export class HelloWorldModel extends Observable {
  public message: string;
  private api: NSYelpApi;

  constructor() {
    super();

    this.api = new NSYelpApi(YOUR_API_KEY);
    this.api.businessSearchWithId('23425')
      .then((t) => console.log(t))
      .catch(err => console.error(err));
  }
}
