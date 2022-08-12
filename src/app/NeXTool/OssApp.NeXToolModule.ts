import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms"
import {RouterModule} from "@angular/router"
import { NeXToolComponent } from './NeXTool.Component';
import { NeXToolRoutes } from '../Routing/OssApp.NeXToolRouting';
import { NeXToolService } from '../Services/NeXTool.service';
import {HttpClientModule} from "@angular/common/http";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2OrderModule } from 'ng2-order-pipe';
@NgModule({
  declarations: [
    NeXToolComponent
  ],
  imports: [
    RouterModule.forChild(NeXToolRoutes),
    CommonModule,FormsModule,HttpClientModule,ReactiveFormsModule,Ng2SearchPipeModule,NgxPaginationModule,Ng2OrderModule
  ],
  providers: [NeXToolService],
  bootstrap: [NeXToolComponent]
})
export class NeXToolModule { }
