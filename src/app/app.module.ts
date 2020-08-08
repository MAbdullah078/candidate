import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisteredcandidateComponent } from './registeredcandidate/registeredcandidate.component';
import { HttpModule } from '@angular/http';
import { RegisteredcandidateService } from './registeredcandidate.service';
import {  HttpClientModule } from '@angular/common/http';
 
import { FormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgxStarRatingModule } from 'ngx-star-rating';
// import { RatingModule } from 'ng-starrating'


 

@NgModule({
  declarations: [
    AppComponent,
    
    RegisteredcandidateComponent,
    
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    
    AngularEditorModule,
    NgxStarRatingModule,
    HttpClientModule
  ],
  providers: [
    RegisteredcandidateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
