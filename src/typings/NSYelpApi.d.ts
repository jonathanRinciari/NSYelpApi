export interface ParsedYLPCategories {
  alias: string;
  name: string;
}

export interface Business {
  id: string;
  name: string;
  closed: boolean;
  website: string;
  categories: Categories[];
  location: Location;
  rating: number;
  imageUrl: string;
  reviewCount: number;
  phone: string;
}

export interface Location {
  address: string;
  city: string;
  coordinates: Coordinate
  countryCode: string;
  postalCode: string;
  stateCode: string;
}

export interface Coordinate {
  latitude: number;
  longitude: number;
}

export interface Categories {
  alias: string;
  name: string;
}

export interface Review {
  message: string;
  rating: number;
  timeCreate: string;
  user: string;
}

export interface Reviews {
  reviews: Review[];
  total: number;
}