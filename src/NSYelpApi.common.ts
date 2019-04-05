/// <reference path="./node_modules/tns-platform-declarations/ios.d.ts" />
/// <reference path="./node_modules/tns-platform-declarations/android.d.ts" />
/// <reference path="./typings/java!YelpApi.d.ts" />
/// <reference path="./typings/NSYelpApi.d.ts" />
/// <reference path="./typings/objc!YelpAPI.d.ts" />

import { Observable } from 'tns-core-modules/data/observable';
import { ios as iosUtils } from "tns-core-modules/utils/utils";
import { ParsedYLPCategories, Reviews, Review, Business, Categories, Location, Coordinate } from './typings/NSYelpApi';

export interface YLPReviewParsed {
  message: string;
  rating: number;
  timeCreate: Date;
  user: YLPUser;
}
export class Common extends Observable {

  sortMap = {
    'best_match': 0,
    'distance': 1,
    'rating': 2,
    'review_count': 3
  };

  public parseBusiness (business: YLPBusiness): Business {
    return {
      id: business.identifier,
      name: business.name,
      closed: business.closed,
      website: business.URL.absoluteString,
      categories: this.parseCategories(business.categories),
      location: this.parseYelpLocation(business.location),
      rating: business.rating,
      imageUrl: business.imageURL.absoluteString,
      reviewCount: business.reviewCount,
      phone: business.phone
    };
  }

  public parseCategories(categories: NSArray<YLPCategory>): Categories[] {
    const convCategories: any[] = iosUtils.collections.nsArrayToJSArray(categories);
    const categoryResults: Categories[] = convCategories.map((category: YLPCategory) => this.parseYLPCategories(category));
    return categoryResults;
  }

  public parseYLPCategories(category: YLPCategory): Categories {
    return {
      alias: category.alias,
      name: category.name,
    };
  }

  public parseYelpLocation(location: YLPLocation): Location {
    return {
        address: iosUtils.collections.nsArrayToJSArray(location.address)[0],
        city: location.city,
        coordinates: this.parseCoordinates(location.coordinate),
        countryCode: location.countryCode,
        postalCode: location.postalCode,
        stateCode: location.stateCode
      };
  }

  public parseCoordinates(coordinates: YLPCoordinate): Coordinate {
    return {
      latitude: coordinates.latitude,
      longitude: coordinates.longitude
    };
  }

  public parseReviews(reviews: YLPBusinessReviews): Reviews {
    return {
      reviews: iosUtils.collections.nsArrayToJSArray(reviews.reviews).map(((review: any) => this.parseReview(review))),
      total: reviews.total
    };
  }

  public parseReview(review: YLPReview): Review {
    return {
      message: review.excerpt,
      rating: review.rating,
      timeCreate: review.timeCreated.toISOString(),
      user: review.user.name
    };
  }

  public formatSearchQuery(location: string | {latitude: number, longitude: number}, category?: string[], deals?: boolean, limit?: number, offset?: number, radius?: number, sort?:  "best_match" | "rating" | "review_count" | "distance", searchTerm?: string): YLPQuery {
    let query: YLPQuery;
    if (location.hasOwnProperty('latitude')) {
      const coordinates = location as {latitude: number, longitude: number};
      let queryLocation = new YLPCoordinate(coordinates);
      query = new YLPQuery({coordinate: queryLocation});
    } else {
      query = new YLPQuery({location: location as string});
    }
      if (category) {
        query.categoryFilter = iosUtils.collections.jsArrayToNSArray(category);
      }
      if (deals) {
        query['dealsFilter'] = deals;
      }

      if (limit) {
        query['limit'] = limit;
      }
      if (offset) {
        query['offset'] = offset;

      }
      if (radius) {
        query['radiusFilter'] = radius;
      }
      if (sort) {
        query['sort'] = this.sortMap[sort];

      }
      if (searchTerm) {
        query['term'] = searchTerm;
      }

      console.log(query.radiusFilter);
      return query;
  }


  public parseAndroidReviews(
    reviews: java.util.ArrayList<com.yelp.fusion.client.models.Review>,
    total: number
  ): Reviews {
    const data: Reviews = {
      total: total,
      reviews: []
    };

    for (let i = 0; i < reviews.size(); i++) {
      const review: com.yelp.fusion.client.models.Review = reviews.get(i);
      const reviewData: Review = {
        message: review.getText(),
        rating: review.getRating(),
        timeCreate: review.getTimeCreated(),
        user: review.getUser().getName()
      };
      data.reviews.push(reviewData);
    }
    return data;
  }

  public parseAndroidBusinesses(
    businesses: java.util.ArrayList<com.yelp.fusion.client.models.Business>
  ): Business[] {
    let results = [];
    for (let i = 0; i < businesses.size(); i++) {
      results.push(this.parseAndroidBusiness(businesses.get(i)));
    }
    return results;
  }

  public parseAndroidBusiness(
    business: com.yelp.fusion.client.models.Business
  ): Business {
    return {
      id: business.getId(),
      name: business.getName(),
      closed: business.getIsClosed(),
      website: business.getUrl(),
      categories: this.parseAndroidCategory(business.getCategories()),
      location: this.parseLocation(
        business.getLocation(),
        business.getCoordinates()
      ),
      rating: business.getRating(),
      imageUrl: business.getImageUrl(),
      reviewCount: business.getReviewCount(),
      phone: business.getPhone()
    };
  }

  public parseAndroidCategory(
    categories: java.util.ArrayList<com.yelp.fusion.client.models.Category>
  ): Categories[] {
    const data = [];
    for (let i = 0; i < categories.size(); i++) {
      const category: com.yelp.fusion.client.models.Category = categories.get(
        i
      );
      const result = {
        alias: category.getAlias(),
        name: category.getTitle()
      };
      data.push(result);
    }
    return data;
  }

  public parseLocation(
    location: com.yelp.fusion.client.models.Location,
    coordinates: com.yelp.fusion.client.models.Coordinates
  ): Location {
    return {
      address: location.getAddress1(),
      city: location.getCity(),
      coordinates: {
        latitude: coordinates.getLatitude(),
        longitude: coordinates.getLongitude()
      },
      countryCode: location.getCountry(),
      postalCode: location.getZipCode(),
      stateCode: location.getState()
    };
  }

}
