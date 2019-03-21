import { Component, OnInit } from "@angular/core";
import { YOUR_API_KEY } from '~/enviornment';
import { RouterExtensions } from 'nativescript-angular/router';
import { NavigationExtras } from '@angular/router';
import { NSYelpApi } from 'NSYelpApi';
import { Business, Reviews } from 'nsyelpapi/typings/NSYelpApi';

@Component({
    selector: "ns-main",
    templateUrl: "./main.component.html",
    styleUrls: ["./main.component.css"],
    moduleId: module.id
})
export class MainComponent implements OnInit {
    api: NSYelpApi;
    constructor(private router: RouterExtensions) {}

    ngOnInit() {
        this.api = new NSYelpApi(YOUR_API_KEY);
    }

    searchByPhone() {
        this.api.businessSearchWithNumber('2037765306')
            .then((results: Business) => {
                const parsedResults = results.name;
                const data: NavigationExtras = {
                    queryParams: {
                        business: JSON.stringify(results)
                    }
                };
                this.router.navigate(['/business'], data);
            })
            .catch(err => console.error(err));
    }

    searchById() {
        this.api.businessSearchWithId('CP_IN_SbHWCvcD5zYxbP0A')
            .then((results: Business) => {
                const parsedResults = results.name;
                const data: NavigationExtras = {
                    queryParams: {
                        business: JSON.stringify(results)
                    }
                };
                this.router.navigate(['/business'], data);
            })
            .catch(err => console.error(err));
    }

    searchByLocation() {
        this.api.searchWithQuery('New Haven', null, false, 1, 0, null, 'best_match', 'pizza')
            .then((results: Business[]) => {
                const parsedResults = results[0].name;
                const data: NavigationExtras = {
                    queryParams: {
                        business: JSON.stringify(results[0])
                    }
                };
                this.router.navigate(['/business'], data);
            })
            .catch(err => console.error(err));
    }

    reviewsById() {
        this.api.businessReviewsWithId('CP_IN_SbHWCvcD5zYxbP0A')
            .then((results: Reviews) => {
                const review = results.reviews[0];
                const total = results.total;
                const data: NavigationExtras = {
                    queryParams: {
                        review: JSON.stringify(review),
                        total: total
                    }
                };

                this.router.navigate(['/reviews'], data);
            });
    }
}
