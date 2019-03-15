"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nativescript_NSYelpApi_1 = require("nativescript-NSYelpApi");
var enviornment_1 = require("~/enviornment");
describe("NSYelpApi Unit Tests", function () {
    var _this = this;
    var api;
    beforeEach(function () {
        api = new nativescript_NSYelpApi_1.NSYelpApi(enviornment_1.YOUR_API_KEY);
    });
    it("exists", function () {
        expect(api).toBeDefined();
    });
    it('Should get a business by id', function () { return __awaiter(_this, void 0, void 0, function () {
        var bizId, results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    bizId = '9MzzaGTQdvkhGKvUsLD2kw';
                    return [4, api.businessSearchWithId(bizId)];
                case 1:
                    results = _a.sent();
                    expect(results).toBeDefined();
                    return [2];
            }
        });
    }); });
    it('Should return a business', function () { return __awaiter(_this, void 0, void 0, function () {
        var bizId, results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    bizId = '9MzzaGTQdvkhGKvUsLD2kw';
                    return [4, api.businessSearchWithId(bizId)];
                case 1:
                    results = _a.sent();
                    expect(results.hasOwnProperty('id')).toBeTruthy();
                    expect(results.id).toEqual(bizId);
                    return [2];
            }
        });
    }); });
    it('Should get a business using phone', function () { return __awaiter(_this, void 0, void 0, function () {
        var phone, results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    phone = '2037765306';
                    return [4, api.businessSearchWithNumber(phone)];
                case 1:
                    results = _a.sent();
                    expect(results.hasOwnProperty('phone')).toBeTruthy();
                    expect(results.phone).toEqual('+1' + phone);
                    return [2];
            }
        });
    }); });
    it('Should get reviews from id', function () { return __awaiter(_this, void 0, void 0, function () {
        var id, results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = '9MzzaGTQdvkhGKvUsLD2kw';
                    return [4, api.businessReviewsWithId(id)];
                case 1:
                    results = _a.sent();
                    expect(results.hasOwnProperty('total')).toBeTruthy();
                    expect(results.hasOwnProperty('reviews')).toBeTruthy();
                    expect(results.reviews.length).toEqual(3);
                    expect(results.reviews[0].hasOwnProperty('rating')).toBeTruthy();
                    return [2];
            }
        });
    }); });
    it('Should get reviews with locale and id', function () { return __awaiter(_this, void 0, void 0, function () {
        var location, id, results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    location = 'New York City';
                    id = 'CP_IN_SbHWCvcD5zYxbP0A';
                    return [4, api.businessReviewsWithIdAndLocale(id)];
                case 1:
                    results = _a.sent();
                    expect(results.hasOwnProperty('total')).toBeTruthy();
                    expect(results.hasOwnProperty('reviews')).toBeTruthy();
                    expect(results.reviews.length).toEqual(3);
                    expect(results.reviews[0].hasOwnProperty('rating')).toBeTruthy();
                    return [2];
            }
        });
    }); });
    it('Should get businesses with location', function () { return __awaiter(_this, void 0, void 0, function () {
        var location, results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    location = 'New Haven';
                    return [4, api.searchWithLocation(location)];
                case 1:
                    results = _a.sent();
                    expect(results.length).toEqual(20);
                    expect(results[0].hasOwnProperty('id')).toBeTruthy();
                    expect(results[0].hasOwnProperty('phone')).toBeTruthy();
                    return [2];
            }
        });
    }); });
    it('Should get businesses with coordinates', function () { return __awaiter(_this, void 0, void 0, function () {
        var coordinates, results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    coordinates = { latitude: 41.313822, longitude: -72.91276 };
                    return [4, api.searchWithCoordinates(coordinates)];
                case 1:
                    results = _a.sent();
                    expect(results.length).toEqual(20);
                    expect(results[0].hasOwnProperty('id')).toBeTruthy();
                    expect(results[0].hasOwnProperty('phone')).toBeTruthy();
                    return [2];
            }
        });
    }); });
    it('Should get businesses with location and offset', function () { return __awaiter(_this, void 0, void 0, function () {
        var results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, api.searchWithLocationTermLimitOffsetSort('New York City', 'pizza', 1, 0, 'best_match')];
                case 1:
                    results = _a.sent();
                    expect(results.length).toEqual(1);
                    expect(results[0].hasOwnProperty('id')).toBeTruthy();
                    expect(results[0].hasOwnProperty('phone')).toBeTruthy();
                    return [2];
            }
        });
    }); });
    it('Should get businesses with coordinates and offset', function () { return __awaiter(_this, void 0, void 0, function () {
        var coordinates, results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    coordinates = { latitude: 41.313822, longitude: -72.91276 };
                    return [4, api.searchWithCoordinateLimitOffsetSort(coordinates, 'pizza', 1, 0, 'best_match')];
                case 1:
                    results = _a.sent();
                    expect(results.length).toEqual(1);
                    expect(results[0].hasOwnProperty('id')).toBeTruthy();
                    expect(results[0].hasOwnProperty('phone')).toBeTruthy();
                    return [2];
            }
        });
    }); });
    it('Should query businesses with location', function () { return __awaiter(_this, void 0, void 0, function () {
        var coordinates, results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    coordinates = { latitude: 41.313822, longitude: -72.91276 };
                    return [4, api.searchWithQuery('New York City', null, true, 1, 9, null, 'best_match', 'pizza')];
                case 1:
                    results = _a.sent();
                    expect(results.length).toEqual(1);
                    expect(results[0].hasOwnProperty('id')).toBeTruthy();
                    expect(results[0].hasOwnProperty('phone')).toBeTruthy();
                    return [2];
            }
        });
    }); });
    it('Should query businesses with coordinates', function () { return __awaiter(_this, void 0, void 0, function () {
        var coordinates, results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    coordinates = { latitude: 41.313822, longitude: -72.91276 };
                    return [4, api.searchWithQuery(coordinates, null, false, 1, 9, null, 'best_match', 'pizza')];
                case 1:
                    results = _a.sent();
                    expect(results.length).toEqual(1);
                    expect(results[0].hasOwnProperty('id')).toBeTruthy();
                    expect(results[0].hasOwnProperty('phone')).toBeTruthy();
                    return [2];
            }
        });
    }); });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpRUFBbUQ7QUFDbkQsNkNBQTZDO0FBUzdDLFFBQVEsQ0FBQyxzQkFBc0IsRUFBRTtJQUFBLGlCQStGaEM7SUE5RkcsSUFBSSxHQUFjLENBQUM7SUFDbkIsVUFBVSxDQUFDO1FBQ1QsR0FBRyxHQUFHLElBQUksa0NBQVMsQ0FBQywwQkFBWSxDQUFDLENBQUM7SUFDcEMsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsUUFBUSxFQUFFO1FBQ1QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzlCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDZCQUE2QixFQUFFOzs7OztvQkFDeEIsS0FBSyxHQUFHLHdCQUF3QixDQUFDO29CQUN2QixXQUFNLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsRUFBQTs7b0JBQS9DLE9BQU8sR0FBRyxTQUFpRDtvQkFDakUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDOzs7O1NBQ2pDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywwQkFBMEIsRUFBRTs7Ozs7b0JBQ3JCLEtBQUssR0FBRyx3QkFBd0IsQ0FBQztvQkFDdkIsV0FBTSxHQUFHLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLEVBQUE7O29CQUEvQyxPQUFPLEdBQUcsU0FBaUQ7b0JBQ2pFLE1BQU0sQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQ2xELE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7O1NBQ3JDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxtQ0FBbUMsRUFBRTs7Ozs7b0JBQ2hDLEtBQUssR0FBRyxZQUFZLENB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QUFFLElBQUksRUFBRSxZQUFZLEVBQUUsT0FBTyxDQUFDLEVBQUE7O29CQUFoRyxPQUFPLEdBQUcsU0FBc0Y7b0JBQ3RHLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNsQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUNyRCxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDOzs7O1NBQ3pELENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTlNZZWxwQXBpIH0gZnJvbSAnbmF0aXZlc2NyaXB0LU5TWWVscEFwaSc7XG5pbXBvcnQgeyBZT1VSX0FQSV9LRVkgfSBmcm9tICd+L2Vudmlvcm5tZW50JztcbmltcG9ydCB7IEJ1c2luZXNzLCBSZXZpZXdzIH0gZnJvbSAnbmF0aXZlc2NyaXB0LU5TWWVscEFwaS90eXBpbmdzL05TWWVscEFwaSc7XG5cblxuZGVjbGFyZSBjb25zdCBkZXNjcmliZTtcbmRlY2xhcmUgY29uc3QgaXQ7XG5kZWNsYXJlIGNvbnN0IGV4cGVjdDtcbmRlY2xhcmUgY29uc3QgYmVmb3JlRWFjaDtcblxuZGVzY3JpYmUoXCJOU1llbHBBcGkgVW5pdCBUZXN0c1wiLCBmdW5jdGlvbigpIHtcbiAgICBsZXQgYXBpOiBOU1llbHBBcGk7XG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICBhcGkgPSBuZXcgTlNZZWxwQXBpKFlPVVJfQVBJX0tFWSk7XG4gICAgfSk7XG5cbiAgICBpdChcImV4aXN0c1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgZXhwZWN0KGFwaSkudG9CZURlZmluZWQoKTtcbiAgICB9KTtcblxuICAgIGl0KCdTaG91bGQgZ2V0IGEgYnVzaW5lc3MgYnkgaWQnLCBhc3luYygpID0+IHtcbiAgICAgICAgY29uc3QgYml6SWQgPSAnOU16emFHVFFkdmtoR0t2VXNMRDJrdyc7XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBhcGkuYnVzaW5lc3NTZWFyY2hXaXRoSWQoYml6SWQpIGFzIEJ1c2luZXNzO1xuICAgICAgICBleHBlY3QocmVzdWx0cykudG9CZURlZmluZWQoKTtcbiAgICB9KTtcblxuICAgIGl0KCdTaG91bGQgcmV0dXJuIGEgYnVzaW5lc3MnLCBhc3luYygpID0+IHtcbiAgICAgICAgY29uc3QgYml6SWQgPSAnOU16emFHVFFkdmtoR0t2VXNMRDJrdyc7XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBhcGkuYnVzaW5lc3NTZWFyY2hXaXRoSWQoYml6SWQpIGFzIEJ1c2luZXNzO1xuICAgICAgICBleHBlY3QocmVzdWx0cy5oYXNPd25Qcm9wZXJ0eSgnaWQnKSkudG9CZVRydXRoeSgpO1xuICAgICAgICBleHBlY3QocmVzdWx0cy5pZCkudG9FcXVhbChiaXpJZCk7XG4gICAgfSk7XG5cbiAgICBpdCgnU2hvdWxkIGdldCBhIGJ1c2luZXNzIHVzaW5nIHBob25lJywgYXN5bmMoKSA9PiB7XG4gICAgICBjb25zdCBwaG9uZSA9ICcyMDM3NzY1MzA2JztcbiAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBhcGkuYnVzaW5lc3NTZWFyY2hXaXRoTnVtYmVyKHBob25lKSBhcyBCdXNpbmVzcztcbiAgICAgIGV4cGVjdChyZXN1bHRzLmhhc093blByb3BlcnR5KCdwaG9uZScpKS50b0JlVHJ1dGh5KCk7XG4gICAgICBleHBlY3QocmVzdWx0cy5waG9uZSkudG9FcXVhbCgnKzEnICsgcGhvbmUpO1xuICAgIH0pO1xuXG4gICAgaXQoJ1Nob3VsZCBnZXQgcmV2aWV3cyBmcm9tIGlkJywgYXN5bmMoKSA9PiB7XG4gICAgICBjb25zdCBpZCA9ICc5TXp6YUdUUWR2a2hHS3ZVc0xEMmt3JztcbiAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBhcGkuYnVzaW5lc3NSZXZpZXdzV2l0aElkKGlkKSBhcyBSZXZpZXdzO1xuICAgICAgZXhwZWN0KHJlc3VsdHMuaGFzT3duUHJvcGVydHkoJ3RvdGFsJykpLnRvQmVUcnV0aHkoKTtcbiAgICAgIGV4cGVjdChyZXN1bHRzLmhhc093blByb3BlcnR5KCdyZXZpZXdzJykpLnRvQmVUcnV0aHkoKTtcbiAgICAgIGV4cGVjdChyZXN1bHRzLnJldmlld3MubGVuZ3RoKS50b0VxdWFsKDMpO1xuICAgICAgZXhwZWN0KHJlc3VsdHMucmV2aWV3c1swXS5oYXNPd25Qcm9wZXJ0eSgncmF0aW5nJykpLnRvQmVUcnV0aHkoKTtcbiAgICB9KTtcblxuICAgIGl0KCdTaG91bGQgZ2V0IHJldmlld3Mgd2l0aCBsb2NhbGUgYW5kIGlkJywgYXN5bmMoKSA9PiB7XG4gICAgICBjb25zdCBsb2NhdGlvbiA9ICdOZXcgWW9yayBDaXR5JztcbiAgICAgIGNvbnN0IGlkID0gJ0NQX0lOX1NiSFdDdmNENXpZeGJQMEEnO1xuICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGFwaS5idXNpbmVzc1Jldmlld3NXaXRoSWRBbmRMb2NhbGUoaWQpIGFzIFJldmlld3M7XG4gICAgICBleHBlY3QocmVzdWx0cy5oYXNPd25Qcm9wZXJ0eSgndG90YWwnKSkudG9CZVRydXRoeSgpO1xuICAgICAgZXhwZWN0KHJlc3VsdHMuaGFzT3duUHJvcGVydHkoJ3Jldmlld3MnKSkudG9CZVRydXRoeSgpO1xuICAgICAgZXhwZWN0KHJlc3VsdHMucmV2aWV3cy5sZW5ndGgpLnRvRXF1YWwoMyk7XG4gICAgICBleHBlY3QocmVzdWx0cy5yZXZpZXdzWzBdLmhhc093blByb3BlcnR5KCdyYXRpbmcnKSkudG9CZVRydXRoeSgpO1xuICAgIH0pO1xuXG4gICAgaXQoJ1Nob3VsZCBnZXQgYnVzaW5lc3NlcyB3aXRoIGxvY2F0aW9uJywgYXN5bmMoKSA9PiB7XG4gICAgICBjb25zdCBsb2NhdGlvbiA9ICdOZXcgSGF2ZW4nO1xuICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGFwaS5zZWFyY2hXaXRoTG9jYXRpb24obG9jYXRpb24pIGFzIEJ1c2luZXNzW107XG4gICAgICBleHBlY3QocmVzdWx0cy5sZW5ndGgpLnRvRXF1YWwoMjApO1xuICAgICAgZXhwZWN0KHJlc3VsdHNbMF0uaGFzT3duUHJvcGVydHkoJ2lkJykpLnRvQmVUcnV0aHkoKTtcbiAgICAgIGV4cGVjdChyZXN1bHRzWzBdLmhhc093blByb3BlcnR5KCdwaG9uZScpKS50b0JlVHJ1dGh5KCk7XG4gICAgfSk7XG5cbiAgICBpdCgnU2hvdWxkIGdldCBidXNpbmVzc2VzIHdpdGggY29vcmRpbmF0ZXMnLCBhc3luYygpID0+IHtcbiAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0ge2xhdGl0dWRlOiA0MS4zMTM4MjIsIGxvbmdpdHVkZTogLTcyLjkxMjc2fTtcbiAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBhcGkuc2VhcmNoV2l0aENvb3JkaW5hdGVzKGNvb3JkaW5hdGVzKTtcbiAgICAgIGV4cGVjdChyZXN1bHRzLmxlbmd0aCkudG9FcXVhbCgyMCk7XG4gICAgICBleHBlY3QocmVzdWx0c1swXS5oYXNPd25Qcm9wZXJ0eSgnaWQnKSkudG9CZVRydXRoeSgpO1xuICAgICAgZXhwZWN0KHJlc3VsdHNbMF0uaGFzT3duUHJvcGVydHkoJ3Bob25lJykpLnRvQmVUcnV0aHkoKTtcbiAgICB9KTtcblxuICAgIGl0KCdTaG91bGQgZ2V0IGJ1c2luZXNzZXMgd2l0aCBsb2NhdGlvbiBhbmQgb2Zmc2V0JywgYXN5bmMoKSA9PiB7XG4gICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgYXBpLnNlYXJjaFdpdGhMb2NhdGlvblRlcm1MaW1pdE9mZnNldFNvcnQoJ05ldyBZb3JrIENpdHknLCAncGl6emEnLCAxLCAwLCAnYmVzdF9tYXRjaCcpO1xuICAgICAgZXhwZWN0KHJlc3VsdHMubGVuZ3RoKS50b0VxdWFsKDEpO1xuICAgICAgZXhwZWN0KHJlc3VsdHNbMF0uaGFzT3duUHJvcGVydHkoJ2lkJykpLnRvQmVUcnV0aHkoKTtcbiAgICAgIGV4cGVjdChyZXN1bHRzWzBdLmhhc093blByb3BlcnR5KCdwaG9uZScpKS50b0JlVHJ1dGh5KCk7XG4gICAgfSk7XG5cbiAgICBpdCgnU2hvdWxkIGdldCBidXNpbmVzc2VzIHdpdGggY29vcmRpbmF0ZXMgYW5kIG9mZnNldCcsIGFzeW5jKCkgPT4ge1xuICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSB7bGF0aXR1ZGU6IDQxLjMxMzgyMiwgbG9uZ2l0dWRlOiAtNzIuOTEyNzZ9O1xuICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGFwaS5zZWFyY2hXaXRoQ29vcmRpbmF0ZUxpbWl0T2Zmc2V0U29ydChjb29yZGluYXRlcywgJ3BpenphJywgMSwgMCwgJ2Jlc3RfbWF0Y2gnKTtcbiAgICAgIGV4cGVjdChyZXN1bHRzLmxlbmd0aCkudG9FcXVhbCgxKTtcbiAgICAgIGV4cGVjdChyZXN1bHRzWzBdLmhhc093blByb3BlcnR5KCdpZCcpKS50b0JlVHJ1dGh5KCk7XG4gICAgICBleHBlY3QocmVzdWx0c1swXS5oYXNPd25Qcm9wZXJ0eSgncGhvbmUnKSkudG9CZVRydXRoeSgpO1xuICAgIH0pO1xuXG4gICAgaXQoJ1Nob3VsZCBxdWVyeSBidXNpbmVzc2VzIHdpdGggbG9jYXRpb24nLCBhc3luYygpID0+IHtcbiAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0ge2xhdGl0dWRlOiA0MS4zMTM4MjIsIGxvbmdpdHVkZTogLTcyLjkxMjc2fTtcbiAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBhcGkuc2VhcmNoV2l0aFF1ZXJ5KCdOZXcgWW9yayBDaXR5JywgbnVsbCwgdHJ1ZSwgMSwgOSwgbnVsbCwgJ2Jlc3RfbWF0Y2gnLCAncGl6emEnKTtcbiAgICAgIGV4cGVjdChyZXN1bHRzLmxlbmd0aCkudG9FcXVhbCgxKTtcbiAgICAgIGV4cGVjdChyZXN1bHRzWzBdLmhhc093blByb3BlcnR5KCdpZCcpKS50b0JlVHJ1dGh5KCk7XG4gICAgICBleHBlY3QocmVzdWx0c1swXS5oYXNPd25Qcm9wZXJ0eSgncGhvbmUnKSkudG9CZVRydXRoeSgpO1xuICAgIH0pO1xuXG4gICAgaXQoJ1Nob3VsZCBxdWVyeSBidXNpbmVzc2VzIHdpdGggY29vcmRpbmF0ZXMnLCBhc3luYygpID0+IHtcbiAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0ge2xhdGl0dWRlOiA0MS4zMTM4MjIsIGxvbmdpdHVkZTogLTcyLjkxMjc2fTtcbiAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBhcGkuc2VhcmNoV2l0aFF1ZXJ5KGNvb3JkaW5hdGVzLCBudWxsLCBmYWxzZSwgMSwgOSwgbnVsbCwgJ2Jlc3RfbWF0Y2gnLCAncGl6emEnKTtcbiAgICAgIGV4cGVjdChyZXN1bHRzLmxlbmd0aCkudG9FcXVhbCgxKTtcbiAgICAgIGV4cGVjdChyZXN1bHRzWzBdLmhhc093blByb3BlcnR5KCdpZCcpKS50b0JlVHJ1dGh5KCk7XG4gICAgICBleHBlY3QocmVzdWx0c1swXS5oYXNPd25Qcm9wZXJ0eSgncGhvbmUnKSkudG9CZVRydXRoeSgpO1xuICAgIH0pO1xufSk7Il19