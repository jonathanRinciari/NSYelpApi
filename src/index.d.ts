import { Common } from './NSYelpApi.common';

export declare class NSYelpApi extends Common {
  constructor(apiKey: string);

  businessSearchWithNumber(phone: string);

  businessSearchWithId(id: string);

  businessReviewsWithId(id: string);

  businessReviewsWithIdAndLocation(id: string, location: string);

  searchWithLocation(location: string);

  searchWithCoordinateLimitOffsetSort(coordinates: {latitude: number, longitude: number}, term: string, limit: number, offset: number, sort: YLPSortType)

  searchWithLocationTermLimitOffsetSort(location: string, term: string, limit: number, offset: number, sort: YLPSortType)

  searchWithCoordinates(coordinates: { latitude: number, longitude: number });

  searchWithQuery(location: string | {latitude: number, longitude: number}, category?: string[], deals?: boolean, limit?: number, offset?: number, radius?: number, sort?: YLPSortType, searchTerm?: string)
}
