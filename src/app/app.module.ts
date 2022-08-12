import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatasetsComponent } from './Home/datasets/datasets.component';
import { HomeComponent } from './Home/Home.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2OrderModule } from 'ng2-order-pipe'
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule, PaginationService } from 'ngx-pagination';
import { NgHorizontalScrollModule } from 'angular-horizontal-scroll-table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NgChartsModule } from 'ng2-charts';





@NgModule({
  declarations: [
    AppComponent,
    DatasetsComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2OrderModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgHorizontalScrollModule,
    MatPaginatorModule,
    NgChartsModule


  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [PaginationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
