import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Business } from 'nsyelpapi/typings/NSYelpApi';

@Component({
  selector: 'ns-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css'],
  moduleId: module.id,
})
export class BusinessComponent implements OnInit {
    business: Business;

  constructor(private route: ActivatedRoute) {
      this.route.queryParams.subscribe((params) => {
        if (params['business']) {
          this.business = JSON.parse(params.business);
        }
      });
    }

  ngOnInit() {
  }

}
