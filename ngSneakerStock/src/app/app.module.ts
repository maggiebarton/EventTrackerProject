import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SneakerComponent } from './components/sneaker/sneaker.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DatePipe } from '@angular/common';
import { BrandNamePipe } from './pipes/brand-name.pipe';
import { ConditionTitlePipe } from './pipes/condition-title.pipe';
import { DashComponent } from './components/dash/dash.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SneakerComponent,
    NotFoundComponent,
    BrandNamePipe,
    ConditionTitlePipe,
    DashComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
