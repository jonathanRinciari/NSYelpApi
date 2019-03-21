import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { AppComponent } from '~/app/app.component';
import { MainComponent } from '~/app/pages/main/main.component';
import { BusinessComponent } from '~/app/pages/business/business.component';
import { ReviewsComponent } from '~/app/pages/reviews/reviews.component';

const routes: Routes = [
    { path: "", component: MainComponent},
    { path: 'business', component: BusinessComponent},
    { path: 'reviews', component: ReviewsComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
