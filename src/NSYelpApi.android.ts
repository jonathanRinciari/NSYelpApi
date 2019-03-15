/// <reference path="./node_modules/tns-platform-declarations/android.d.ts" />
import { Common } from "./NSYelpApi.common";
import { Business, Location, Categories, Reviews, Review } from './typings/NSYelpApi';

export class NSYelpApi extends Common {
  _client: com.yelp.fusion.client.connection.YelpFusionApi;

  constructor(apiKey: string) {
    super();
    this._client = new com.yelp.fusion.client.connection.YelpFusionApiFactory().createAPI(
      apiKey
    );
  }

  public businessSearchWithId(id: string): Promise<Business> {
    return new Promise((resolve, reject) => {
      try {
        const search = this._client.getBusiness(id);
        const response: com.yelp.fusion.client.models.Business = search.execute().body();
        const data = this.parseAndroidBusiness(response) as Business;
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  public searchWithCoordinates(coordinates: {
    latitude: number;
    longitude: number;
  }): Promise<Business[]> {
    return new Promise((resolve, reject) => {
      let params = new java.util.HashMap();
      params.put("latitude", `${coordinates.latitude}`);
      params.put("longitude", `${coordinates.longitude}`);
      try {
        const search: com.yelp.fusion.client.models.SearchResponse = this._client
          .getBusinessSearch(params)
          .execute()
          .body();
        const businesses: java.util.ArrayList<
          com.yelp.fusion.client.models.Business
        > = search.getBusinesses();
        const parsedBusinesses = this.parseAndroidBusinesses(businesses);
        resolve(parsedBusinesses);
      } catch (err) {
        reject(err);
      }
    });
  }

  public searchWithLocation(location: string): Promise<Business[]> {
    return new Promise((resolve, reject) => {
      const params = new java.util.HashMap();
      params.put("location", location);
      try {
        const search: com.yelp.fusion.client.models.SearchResponse = this._client
          .getBusinessSearch(params)
          .execute()
          .body();
        const businesses: java.util.ArrayList<
          com.yelp.fusion.client.models.Business
        > = search.getBusinesses();
        const parsedBusinesses = this.parseAndroidBusinesses(businesses);
        resolve(parsedBusinesses);
      } catch (err) {
        reject(err);
      }
    });
  }

  public searchWithLocationTermLimitOffsetSort(
    location: string,
    term: string,
    limit: number,
    offset: number,
    sort: "best_match" | "rating" | "review_count" | "distance"
  ): Promise<Business[]> {
    return new Promise((resolve, reject) => {
      const params = new java.util.HashMap();
      params.put("location", location);
      params.put("term", term);
      params.put("limit", `${limit}`);
      params.put("offset", `${offset}`);
      params.put("sort_by", sort);
      try {
        const search: com.yelp.fusion.client.models.SearchResponse = this._client
          .getBusinessSearch(params)
          .execute()
          .body();
        const businesses: java.util.ArrayList<
          com.yelp.fusion.client.models.Business
        > = search.getBusinesses();
        const parsedBusinesses = this.parseAndroidBusinesses(businesses);
        resolve(parsedBusinesses);
      } catch (err) {
        reject(err);
      }
    });
  }

  public businessReviewsWithIdAndLocale(id: string): Promise<Reviews> {
    return new Promise((resolve, reject) => {
      try {
        const search = this._client.getBusinessReviews(
          id,
          java.util.Locale.getDefault().toString()
        );
        const reviews: com.yelp.fusion.client.models.Reviews = search
          .execute()
          .body();
        const parsedReviews = this.parseAndroidReviews(
          reviews.getReviews(),
          reviews.getTotal()
        );
        resolve(parsedReviews);
      } catch (err) {}
    });
  }

  public searchWithCoordinateLimitOffsetSort(
    coordinates: { latitude: number; longitude: number },
    term: string,
    limit: number,
    offset: number,
    sort: "best_match" | "rating" | "review_count" | "distance"
  ): Promise<Business[]> {
    return new Promise((resolve, reject) => {
      let params = new java.util.HashMap();
      params.put("latitude", `${coordinates.latitude}`);
      params.put("longitude", `${coordinates.longitude}`);
      params.put("term", term);
      params.put("limit", `${limit}`);
      params.put("offset", `${offset}`);
      params.put("sort", `${sort}`);

      try {
        const search: com.yelp.fusion.client.models.SearchResponse = this._client
          .getBusinessSearch(params)
          .execute()
          .body();
        const businesses: java.util.ArrayList<
          com.yelp.fusion.client.models.Business
        > = search.getBusinesses();
        const parsedBusinesses = this.parseAndroidBusinesses(businesses);
        console.log(parsedBusinesses);
        resolve(parsedBusinesses);
      } catch (err) {
        reject(err);
      }
    });
  }

  public searchWithQuery(
    location: string | { latitude: number; longitude: number },
    category?: string[],
    deals?: boolean,
    limit?: number,
    offset?: number,
    radius?: number,
    sort?: "best_match" | "rating" | "review_count" | "distance",
    searchTerm?: string
  ): Promise<Business[]> {
    return new Promise((resolve, reject) => {
      let params = new java.util.HashMap();
      if (typeof location === "string") {
        params.put("location", location);
      }

      if (location.hasOwnProperty("latitude")) {
        const coordinates = location as { latitude: number; longitude: number };
        params.put("latitude", `${coordinates.latitude}`);
        params.put("longitude", `${coordinates.longitude}`);
      }

      if (searchTerm) {
        params.put("term", searchTerm);
      }

      if (limit) {
        params.put("limit", `${limit}`);
      }

      if (offset) {
        params.put("offset", `${offset}`);
      }

      if (sort) {
        params.put("sort", `${sort}`);
      }

      if (deals) {
        params.put("attributes", "deals");
      }

      if (radius) {
        params.put("radius", `${radius}`);
      }

      if (category) {
        let categoryString = "";
        category.forEach(val => {
          categoryString += ` ${val}`;
        });
        params.put("categories", categoryString.trim());
      }

      try {
        const search: com.yelp.fusion.client.models.SearchResponse = this._client
          .getBusinessSearch(params)
          .execute()
          .body();
        const businesses: java.util.ArrayList<
          com.yelp.fusion.client.models.Business
        > = search.getBusinesses();
        const parsedBusinesses = this.parseAndroidBusinesses(businesses);
        resolve(parsedBusinesses);
      } catch (err) {
        reject(err);
      }
    });
  }

  public businessSearchWithNumber(phone: string): Promise<Business[]> {
    return new Promise((resolve, reject) => {
      try {
        const search = this._client.getPhoneSearch("+1" + phone);
        const response: com.yelp.fusion.client.models.SearchResponse = search
          .execute()
          .body();
        const businesses = this.parseAndroidBusinesses(
          response.getBusinesses()
        );
        resolve(businesses);
      } catch (err) {
        reject(err);
      }
    });
  }

  public businessReviewsWithId(id: string): Promise<Reviews> {
    return new Promise((resolve, reject) => {
      try {
        const search = this._client.getBusinessReviews(
          id,
          java.util.Locale.getDefault().toString()
        );
        const reviews: com.yelp.fusion.client.models.Reviews = search
          .execute()
          .body();
        const parsedReviews = this.parseAndroidReviews(
          reviews.getReviews(),
          reviews.getTotal()
        );
        resolve(parsedReviews);
      } catch (err) {
        reject(err);
      }
    });
  }
}
