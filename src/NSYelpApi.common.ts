import { Observable } from 'tns-core-modules/data/observable';
import { ios as iosUtils } from "tns-core-modules/utils/utils";
import { ParsedYLPCategories } from './typings/NSYelpApi';


export interface YLPReviewParsed {
  message: string;
  rating: number;
  timeCreate: Date;
  user: YLPUser;
}
export class Common extends Observable {
  public parseBusiness (business: YLPBusiness) {
    return {
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

  public parseCategories(categories: NSArray<YLPCategory>): ParsedYLPCategories[] {
    const convCategories: any[] = iosUtils.collections.nsArrayToJSArray(categories);
    const categoryResults: ParsedYLPCategories[] = convCategories.map((category: YLPCategory) => this.parseYLPCategories(category));
    return categoryResults;
  }

  public parseYLPCategories(category: YLPCategory): ParsedYLPCategories {
    return {
      alias: category.alias,
      name: category.name
    };
  }

  public parseYelpLocation(location: YLPLocation) {
    return {
        address: location.address,
        city: location.city,
        coordinate: this.parseCoordinates(location.coordinate),
        countryCode: location.countryCode,
        postalCode: location.postalCode,
        stateCode: location.stateCode
      };
  }

  public parseCoordinates(coordinates: YLPCoordinate) {
    return {
      latitude: coordinates.latitude,
      longitude: coordinates.longitude
    };
  }

  public parseReviews(reviews: YLPBusinessReviews): {reviews: YLPReviewParsed[], total: number} {
    return {
      reviews: iosUtils.collections.nsArrayToJSArray(reviews.reviews).map(((review: any) => this.parseReview(review))),
      total: reviews.total
    };
  }

  public parseReview(review: YLPReview): YLPReviewParsed {
    return {
      message: review.excerpt,
      rating: review.rating,
      timeCreate: review.timeCreated,
      user: review.user
    };
  }

  public formatSearchQuery(location: string | {latitude: number, longitude: number}, category?: string[], deals?: boolean, limit?: number, offset?: number, radius?: number, sort?: YLPSortType, searchTerm?: string): YLPQuery {
    let query: YLPQuery;

    if (location) {
      if (location.hasOwnProperty('latitude')) {
        const coordinates = location as {latitude: number, longitude: number};
        let queryLocation = new YLPCoordinate(coordinates);
        query = new YLPQuery({coordinate: queryLocation});
      } else {
        query = new YLPQuery({location: location as string});
      }
        query.categoryFilter = iosUtils.collections.jsArrayToNSArray(category);
        query.dealsFilter = deals;
        query.limit = limit;
        query.offset = offset;
        query.radiusFilter = radius;
        query.sort = sort;
        query.term = searchTerm;
      return query;
    } else {
      return query;
    }
  }
}
