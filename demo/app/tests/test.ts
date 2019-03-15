import { NSYelpApi } from 'nativescript-NSYelpApi';
import { YOUR_API_KEY } from '~/enviornment';
import { Business, Reviews } from 'nativescript-NSYelpApi/typings/NSYelpApi';


declare const describe;
declare const it;
declare const expect;
declare const beforeEach;

describe("NSYelpApi Unit Tests", function() {
    let api: NSYelpApi;
    beforeEach(() => {
      api = new NSYelpApi(YOUR_API_KEY);
    });

    it("exists", function() {
        expect(api).toBeDefined();
    });

    it('Should get a business by id', async() => {
        const bizId = '9MzzaGTQdvkhGKvUsLD2kw';
        const results = await api.businessSearchWithId(bizId) as Business;
        expect(results).toBeDefined();
    });

    it('Should return a business', async() => {
        const bizId = '9MzzaGTQdvkhGKvUsLD2kw';
        const results = await api.businessSearchWithId(bizId) as Business;
        expect(results.hasOwnProperty('id')).toBeTruthy();
        expect(results.id).toEqual(bizId);
    });

    it('Should get a business using phone', async() => {
      const phone = '2037765306';
      const results = await api.businessSearchWithNumber(phone) as Business;
      expect(results.hasOwnProperty('phone')).toBeTruthy();
      expect(results.phone).toEqual('+1' + phone);
    });

    it('Should get reviews from id', async() => {
      const id = '9MzzaGTQdvkhGKvUsLD2kw';
      const results = await api.businessReviewsWithId(id) as Reviews;
      expect(results.hasOwnProperty('total')).toBeTruthy();
      expect(results.hasOwnProperty('reviews')).toBeTruthy();
      expect(results.reviews.length).toEqual(3);
      expect(results.reviews[0].hasOwnProperty('rating')).toBeTruthy();
    });

    it('Should get reviews with locale and id', async() => {
      const location = 'New York City';
      const id = 'CP_IN_SbHWCvcD5zYxbP0A';
      const results = await api.businessReviewsWithIdAndLocale(id) as Reviews;
      expect(results.hasOwnProperty('total')).toBeTruthy();
      expect(results.hasOwnProperty('reviews')).toBeTruthy();
      expect(results.reviews.length).toEqual(3);
      expect(results.reviews[0].hasOwnProperty('rating')).toBeTruthy();
    });

    it('Should get businesses with location', async() => {
      const location = 'New Haven';
      const results = await api.searchWithLocation(location) as Business[];
      expect(results.length).toEqual(20);
      expect(results[0].hasOwnProperty('id')).toBeTruthy();
      expect(results[0].hasOwnProperty('phone')).toBeTruthy();
    });

    it('Should get businesses with coordinates', async() => {
      const coordinates = {latitude: 41.313822, longitude: -72.91276};
      const results = await api.searchWithCoordinates(coordinates);
      expect(results.length).toEqual(20);
      expect(results[0].hasOwnProperty('id')).toBeTruthy();
      expect(results[0].hasOwnProperty('phone')).toBeTruthy();
    });

    it('Should get businesses with location and offset', async() => {
      const results = await api.searchWithLocationTermLimitOffsetSort('New York City', 'pizza', 1, 0, 'best_match');
      expect(results.length).toEqual(1);
      expect(results[0].hasOwnProperty('id')).toBeTruthy();
      expect(results[0].hasOwnProperty('phone')).toBeTruthy();
    });

    it('Should get businesses with coordinates and offset', async() => {
      const coordinates = {latitude: 41.313822, longitude: -72.91276};
      const results = await api.searchWithCoordinateLimitOffsetSort(coordinates, 'pizza', 1, 0, 'best_match');
      expect(results.length).toEqual(1);
      expect(results[0].hasOwnProperty('id')).toBeTruthy();
      expect(results[0].hasOwnProperty('phone')).toBeTruthy();
    });

    it('Should query businesses with location', async() => {
      const coordinates = {latitude: 41.313822, longitude: -72.91276};
      const results = await api.searchWithQuery('New York City', null, true, 1, 9, null, 'best_match', 'pizza');
      expect(results.length).toEqual(1);
      expect(results[0].hasOwnProperty('id')).toBeTruthy();
      expect(results[0].hasOwnProperty('phone')).toBeTruthy();
    });

    it('Should query businesses with coordinates', async() => {
      const coordinates = {latitude: 41.313822, longitude: -72.91276};
      const results = await api.searchWithQuery(coordinates, null, false, 1, 9, null, 'best_match', 'pizza');
      expect(results.length).toEqual(1);
      expect(results[0].hasOwnProperty('id')).toBeTruthy();
      expect(results[0].hasOwnProperty('phone')).toBeTruthy();
    });
});