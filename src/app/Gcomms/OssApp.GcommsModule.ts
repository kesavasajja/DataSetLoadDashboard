import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms"
import {RouterModule} from "@angular/router"
import { GcommsComponent } from './Gcomms.Component';
import { GcommsRoutes } from '../Routing/OssApp.GcommsRouting';
import { GcommsService } from '../Services/Gcomms.service';
import {HttpClientModule} from "@angular/common/http";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgHorizontalScrollModule } from 'angular-horizontal-scroll-table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    GcommsComponent
  ],
  imports: [
    RouterModule.forChild(GcommsRoutes),
    CommonModule,FormsModule,HttpClientModule,ReactiveFormsModule,
    Ng2SearchPipeModule,Ng2OrderModule,NgxPaginationModule,NgHorizontalScrollModule,
    MatPaginatorModule,MatButtonModule,DataTablesModule

  ],
  providers: [GcommsService],
  bootstrap: [GcommsComponent]
})
export class GcommsModule { }
