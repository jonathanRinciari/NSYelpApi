import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Business, Reviews, Review } from 'nsyelpapi/typings/NSYelpApi';

@Component({
  selector: 'ns-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
  moduleId: module.id,
})
export class ReviewsComponent implements OnInit {
    review: Review;
    total: string;

  constructor(private route: ActivatedRoute) {
      this.route.queryParams.subscribe((params) => {
        if (params['review']) {
          this.review = JSON.parse(params['review']);
          this.total = params['total'];
          console.log(this.review)
          // console.log(this.total);
        }
      });
   }

  ngOnInit() {
  }

}
