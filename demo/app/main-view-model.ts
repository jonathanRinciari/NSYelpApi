import { Observable } from 'tns-core-modules/data/observable';
import { NSYelpApi } from 'nativescript-NSYelpApi';

export class HelloWorldModel extends Observable {
  public message: string;
  private nSYelpApi: NSYelpApi;

  constructor() {
    super();

    this.nSYelpApi = new NSYelpApi();
    this.message = this.nSYelpApi.message;
  }
}
