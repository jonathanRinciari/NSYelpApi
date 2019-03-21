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
    import { NSYelpApi } from 'NSYelpApi';


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

#### Getting A Business With an Id

```javascript
    searchById() {
        this.api.businessSearchWithId('CP_IN_SbHWCvcD5zYxbP0A')
            .then((results: Business) => {
                const parsedResults = results.name;
                const data: NavigationExtras = {
                    queryParams: {
                        business: JSON.stringify(results)
                    }
                };
                this.router.navigate(['/business'], data);
            })
            .catch(err => console.error(err));
    }
```


#### Getting A Business By Phone

```javascript
    searchByPhone() {
        this.api.businessSearchWithNumber('2037765306')
            .then((results: Business) => {
                const parsedResults = results.name;
                const data: NavigationExtras = {
                    queryParams: {
                        business: JSON.stringify(results)
                    }
                };
                this.router.navigate(['/business'], data);
            })
            .catch(err => console.error(err));
    }
```


#### Getting reviews by business ID

```javascript
    reviewsById() {
        this.api.businessReviewsWithId('CP_IN_SbHWCvcD5zYxbP0A')
            .then((results: Reviews) => {
                const review = results.reviews[0];
                const total = results.total;
                const data: NavigationExtras = {
                    queryParams: {
                        review: JSON.stringify(review),
                        total: total
                    }
                };

                this.router.navigate(['/reviews'], data);
            });
        }
```

#### Example Response of Reviews

```javascript

    const reviews = {
        reviews: [
            message: "I just love Modern Apizza. Every couple of weeks I crave for modern and go back there to have a custom made pizza. The combo I like a lot and would...",
            rating: 5,
            timeCreate: "2019-03-09T22:36:58.000Z",
            user: "Akshay A."
        ],
        total: 1
    }
```

#### Example Reponse of Business

```javascript

    const business = {
            id: "jfqLSA2Ic9gC9BpahJLbTA",
            name: "Frank Pepe Pizzeria Napoletana",
            closed: false,
            website: "https://www.yelp.com/biz/frank-pepe-pizzeria-napoletana-new-haven?adjust_creative=Jx7qaHGmn1sKws49NEEdHA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Jx7qaHGmn1sKws49NEEdHA",
            categories: [
                {
                    alias: "pizza",
                    name: "Pizza"
                },
                {
                    alias: "italian",
                    name: "Italian"
                },
                {
                    alias: "wine_bars",
                    name: "Wine Bars"
                }
            ],
            location: {
                address: "157 Wooster St",
                city: "New Haven",
                coordinates: {
                    latitude: 41.302918,
                    longitude: -72.916899
                },
                countryCode: "US",
                postalCode: "06511",
                stateCode: "CT"
            },
            rating: 4,
            imageUrl: "https://s3-media1.fl.yelpcdn.com/bphoto/eHWOn8Ew9iE4TfrYcHv9tg/o.jpg",
            reviewCount: 2
    }
```
## License

Apache License Version 2.0, January 2004

```

```
