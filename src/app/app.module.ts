import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatasetsComponent } from './Home/datasets/datasets.component';
import { HomeComponent } from './Home/Home.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { Ng2OrderModule } from 'ng2-order-pipe'
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule, PaginationService } from 'ngx-pagination';
import { NgHorizontalScrollModule } from 'angular-horizontal-scroll-table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NgApexchartsModule } from "ng-apexcharts";
import { MatButtonModule } from '@angular/material/button';
import { AllDatasetsComponent } from './all-datasets/all-datasets.component';

import { InProgressComponent } from './in-progress/in-progress.component';
import { ReceivedComponent } from './received/received.component';
import { CompletedComponent } from './completed/completed.component';
import { OnHoldComponent } from './on-hold/on-hold.component';
import { AgGridModule } from 'ag-grid-angular';
import {DataTablesModule} from 'angular-datatables';
import { NgChartsModule } from 'ng2-charts';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ApexOptions} from 'apexcharts'






@NgModule({
  declarations: [
    AppComponent,
    DatasetsComponent,
    HomeComponent,
     AllDatasetsComponent,
     InProgressComponent,
     ReceivedComponent,
     CompletedComponent,
     OnHoldComponent,



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
    NgChartsModule,
    NgApexchartsModule,
    AgGridModule,
    DataTablesModule





  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [PaginationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
