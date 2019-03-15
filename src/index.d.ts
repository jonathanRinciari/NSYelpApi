import { Common } from './NSYelpApi.common';
import { Business, Reviews } from './typings/NSYelpApi';
export declare class NSYelpApi extends Common {
    private _client;
    constructor(apiKey: string);
    businessSearchWithNumber(phone: string): Promise<Business | {}>;
    businessSearchWithId(id: string): Promise<Business | {}>;
    businessReviewsWithId(id: string): Promise<Reviews | {}>;
    searchWithCoordinates(coordinates: {
        latitude: number;
        longitude: number;
    }): Promise<Business[] | []>;
    searchWithLocation(location: string): Promise<Business[] | []>;
    searchWithLocationTermLimitOffsetSort(location: string, term: string, limit: number, offset: number, sort: YLPSortType): Promise<Business[] | []>;
    businessReviewsWithIdAndLocale(id: string): Promise<Reviews | {}>;
    searchWithCoordinateLimitOffsetSort(coordinates: {
        latitude: number;
        longitude: number;
    }, term: string, limit: number, offset: number, sort: YLPSortType): Promise<Business[] | []>;
    searchWithQuery(location: string | {
        latitude: number;
        longitude: number;
    }, category?: string[], deals?: boolean, limit?: number, offset?: number, radius?: number, sort?: YLPSortType, searchTerm?: string): Promise<Business[] | []>;
}
