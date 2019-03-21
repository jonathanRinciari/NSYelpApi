import { Common } from './NSYelpApi.common';
import { ios as iosUtils } from 'tns-core-modules/utils/utils';
import { Business, Reviews } from './typings/NSYelpApi';
export class NSYelpApi extends Common {
  sortMap = {
    'best_match': 0,
    'distance': 1,
    'rating': 2,
    'review_count': 3
  };

  private _client: YLPClient;
  constructor(apiKey: string) {
    super();
    this._client = new YLPClient({APIKey: apiKey});
  }

  public businessSearchWithNumber(phone: string): Promise<Business | {}> {
    return new Promise((resolve, reject) => {
      this._client.businessWithPhoneNumberCompletionHandler(`+1${phone}`, (search: YLPSearch, err: NSError) => {
        if (err) reject(err);
        if (search.total > 0) {
          const business = search.businesses[0];
          resolve(this.parseBusiness(business));
        } else {
          resolve({});
        }
      });
    });
  }

  public businessSearchWithId(id: string): Promise<Business | {}> {
    return new Promise((resolve, reject) => {
      this._client.businessWithIdCompletionHandler(id, (business: YLPBusiness, err: NSError) => {
        if (err) reject(err);
        if (business) {
          resolve(this.parseBusiness(business));
        } else {
          resolve({});
        }
      });
    });
  }

  public businessReviewsWithId(id: string): Promise<Reviews | []> {
    return new Promise((resolve, reject) => {
      this._client.reviewsForBusinessWithIdCompletionHandler(id, (reviews: YLPBusinessReviews, err: NSError) => {
        if (err) reject(err);
        if (reviews) {
          const parsedReviews = this.parseReviews(reviews);
          resolve(parsedReviews);
        } else {
          resolve([]);
        }
      });
    });
  }

  public searchWithCoordinates(coordinates: {latitude: number, longitude: number}): Promise<Business[] | []> {
    return new Promise((resolve, reject) => {
      const ylpCoordinates: YLPCoordinate = new YLPCoordinate(coordinates);
      this._client.searchWithCoordinateCompletionHandler(ylpCoordinates, (search: YLPSearch , err: NSError) => {
        if (err) reject(err);
        if (search.total > 0) {
          const businessesInCoordiantes = iosUtils.collections.nsArrayToJSArray(search.businesses);
          const parsedBusinesses = businessesInCoordiantes.map((business: any) => this.parseBusiness(business));
          resolve(parsedBusinesses);
        } else {
          resolve([]);
        }
      });
    });
  }

  public searchWithLocation(location: string): Promise<Business[] | []> {
    return new Promise((resolve, reject) => {
      this._client.searchWithLocationCompletionHandler(location, (search: YLPSearch, err) => {
        if (err) reject(err);
        if (search.total > 0) {
          const businessesInCoordiantes = iosUtils.collections.nsArrayToJSArray(search.businesses);
          const parsedBusinesses = businessesInCoordiantes.map((business: any) => this.parseBusiness(business));
          resolve(parsedBusinesses);
        } else {
          resolve([]);
        }
      });
    });
  }

  public searchWithLocationTermLimitOffsetSort(location: string, term: string, limit: number, offset: number, sort: "best_match" | "rating" | "review_count" | "distance"): Promise<Business[] | []> {
    return new Promise((resolve, reject) => {
      this._client.searchWithLocationTermLimitOffsetSortCompletionHandler(location, term, limit, offset, this.sortMap[sort] , (search: YLPSearch, err: NSError) => {
        if (err) reject(err);
        if (search.total > 0) {
          const businessesInLocation = iosUtils.collections.nsArrayToJSArray(search.businesses);
          const parsedBusinesses = businessesInLocation.map((business: any) => this.parseBusiness(business));
          resolve(parsedBusinesses);
        } else {
          resolve([]);
        }
      });
    });
  }

  public businessReviewsWithIdAndLocale(id: string): Promise<Reviews | []> {
    return new Promise((resolve, reject) => {
      this._client.reviewsForBusinessWithIdLocaleCompletionHandler(id, 'en_US', (reviews: YLPBusinessReviews, err: NSError) => {
        if (err) reject(err);
        if (reviews) {
          const parsedReviews = this.parseReviews(reviews);
          resolve(parsedReviews);
        } else {
          resolve([]);
        }
      });
    });
  }

  public searchWithCoordinateLimitOffsetSort(coordinates: {latitude: number, longitude: number}, term: string, limit: number, offset: number, sort: "best_match" | "rating" | "review_count" | "distance"): Promise<Business[] | []> {
    return new Promise((resolve, reject) => {
      const ylpCoordinates: YLPCoordinate = new YLPCoordinate(coordinates);
      this._client.searchWithCoordinateTermLimitOffsetSortCompletionHandler(ylpCoordinates, term, limit, offset, this.sortMap[sort], (search: YLPSearch, err: NSError) => {
        if (err) reject(err);
        if (search.total > 0) {
          const businessesInCoordinates = iosUtils.collections.nsArrayToJSArray(search.businesses);
          const parsedBusinesses = businessesInCoordinates.map((business: any) => this.parseBusiness(business));
          resolve(parsedBusinesses);
        } else {
          resolve([]);
        }
      });
    });
  }

  public searchWithQuery(location: string | {latitude: number, longitude: number}, category?: string[], deals?: boolean, limit?: number, offset?: number, radius?: number, sort?: "best_match" | "rating" | "review_count" | "distance", searchTerm?: string): Promise<Business[] | []> {
    return new Promise((resolve, reject) => {
      let query: YLPQuery = this.formatSearchQuery(location, category, deals, limit, offset, radius, sort, searchTerm);
      this._client.searchWithQueryCompletionHandler(query, (search: YLPSearch, err: NSError) => {
        if (err) reject(err);
        if (search.total > 0) {
          const businessesInQuery = iosUtils.collections.nsArrayToJSArray(search.businesses);
          const parsedBusinesses = businessesInQuery.map((business: any) => this.parseBusiness(business));
          resolve(parsedBusinesses);
        } else {
          resolve([]);
        }
      });
    });
  }
}
