
declare class YLPBusiness extends NSObject {

	static alloc(): YLPBusiness; // inherited from NSObject

	static new(): YLPBusiness; // inherited from NSObject

	readonly URL: NSURL;

	readonly categories: NSArray<YLPCategory>;

	readonly closed: boolean;

	readonly identifier: string;

	readonly imageURL: NSURL;

	readonly location: YLPLocation;

	readonly name: string;

	readonly phone: string;

	readonly rating: number;

	readonly reviewCount: number;
}

declare class YLPBusinessReviews extends NSObject {

	static alloc(): YLPBusinessReviews; // inherited from NSObject

	static new(): YLPBusinessReviews; // inherited from NSObject

	readonly reviews: NSArray<YLPReview>;

	readonly total: number;
}

declare class YLPCategory extends NSObject {

	static alloc(): YLPCategory; // inherited from NSObject

	static new(): YLPCategory; // inherited from NSObject

	readonly alias: string;

	readonly name: string;
}

declare class YLPClient extends NSObject {

	static alloc(): YLPClient; // inherited from NSObject

	static new(): YLPClient; // inherited from NSObject

	constructor(o: { APIKey: string; });

	businessWithIdCompletionHandler(businessId: string, completionHandler: (p1: YLPBusiness, p2: NSError) => void): void;

	businessWithPhoneNumberCompletionHandler(phoneNumber: string, completionHandler: (p1: YLPSearch, p2: NSError) => void): void;

	initWithAPIKey(APIKey: string): this;

	reviewsForBusinessWithIdCompletionHandler(businessId: string, completionHandler: (p1: YLPBusinessReviews, p2: NSError) => void): void;

	reviewsForBusinessWithIdLocaleCompletionHandler(businessId: string, locale: string, completionHandler: (p1: YLPBusinessReviews, p2: NSError) => void): void;

	searchWithCoordinateCompletionHandler(coordinate: YLPCoordinate, completionHandler: (p1: YLPSearch, p2: NSError) => void): void;

	searchWithCoordinateTermLimitOffsetSortCompletionHandler(coordinate: YLPCoordinate, term: string, limit: number, offset: number, sort: YLPSortType, completionHandler: (p1: YLPSearch, p2: NSError) => void): void;

	searchWithLocationCompletionHandler(location: string, completionHandler: (p1: YLPSearch, p2: NSError) => void): void;

	searchWithLocationTermLimitOffsetSortCompletionHandler(location: string, term: string, limit: number, offset: number, sort: YLPSortType, completionHandler: (p1: YLPSearch, p2: NSError) => void): void;

	searchWithQueryCompletionHandler(query: YLPQuery, completionHandler: (p1: YLPSearch, p2: NSError) => void): void;
}

declare class YLPCoordinate extends NSObject {

	static alloc(): YLPCoordinate; // inherited from NSObject

	static new(): YLPCoordinate; // inherited from NSObject

	readonly latitude: number;

	readonly longitude: number;

	constructor(o: { latitude: number; longitude: number; });

	initWithLatitudeLongitude(latitude: number, longitude: number): this;
}

declare class YLPLocation extends NSObject {

	static alloc(): YLPLocation; // inherited from NSObject

	static new(): YLPLocation; // inherited from NSObject

	readonly address: NSArray<string>;

	readonly city: string;

	readonly coordinate: YLPCoordinate;

	readonly countryCode: string;

	readonly postalCode: string;

	readonly stateCode: string;
}

declare class YLPQuery extends NSObject {

	static alloc(): YLPQuery; // inherited from NSObject

	static new(): YLPQuery; // inherited from NSObject

	categoryFilter: NSArray<string>;

	dealsFilter: boolean;

	limit: number;

	offset: number;

	radiusFilter: number;

	sort: YLPSortType;

	term: string;

	constructor(o: { coordinate: YLPCoordinate; });

	constructor(o: { location: string; });

	initWithCoordinate(coordinate: YLPCoordinate): this;

	initWithLocation(location: string): this;
}

declare class YLPReview extends NSObject {

	static alloc(): YLPReview; // inherited from NSObject

	static new(): YLPReview; // inherited from NSObject

	readonly excerpt: string;

	readonly rating: number;

	readonly timeCreated: Date;

	readonly user: YLPUser;
}

declare class YLPSearch extends NSObject {

	static alloc(): YLPSearch; // inherited from NSObject

	static new(): YLPSearch; // inherited from NSObject

	readonly businesses: NSArray<YLPBusiness>;

	readonly total: number;
}

declare const enum YLPSortType {

	BestMatched = 0,

	Distance = 1,

	HighestRated = 2,

	MostReviewed = 3
}

declare class YLPUser extends NSObject {

	static alloc(): YLPUser; // inherited from NSObject

	static new(): YLPUser; // inherited from NSObject

	readonly imageURL: NSURL;

	readonly name: string;
}

declare var YelpAPIVersionNumber: number;

declare var YelpAPIVersionString: interop.Reference<number>;

declare var kYLPAPIHost: string;
