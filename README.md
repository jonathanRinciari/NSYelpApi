# NSYelpApi

Native implementation of the Official Native YelpApi Implementation

## (Optional) Prerequisites / Requirements

A YelpApi api key is required. Sign up at https://www.yelp.com/developers

## Installation

```javascript
tns plugin add NSYelpApi
```

## Usage


#### General Setup

```javascript
    import { NSYelpApi } from 'nativescript-NSYelpApi';


    export class HelloWorldModel extends Observable {
        public message: string;
        private api: NSYelpApi;

    constructor() {
    super();
    this.api = new NSYelpApi(YOUR_API_KEY);
    this.api.businessSearchWithId('9MzzaGTQdvkhGKvUsLD2kw')
        .then((t) => console.log(t))
        .catch(err => console.error(err));

    const coordinates = {latitude: 41.313822, longitude: -72.91276};
    this.api.searchWithQuery(coordinates, null, false, 50, 9, null, 'best_match', 'pizza')
        .then((a) => console.log(a, 't'))
        .catch(err => console.log(err, 'a'));
  }
}
```

## License

Apache License Version 2.0, January 2004

```

```
