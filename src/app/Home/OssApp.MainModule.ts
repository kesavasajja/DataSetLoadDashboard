import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms"
import {RouterModule} from "@angular/router"
import { MasterPageComponent } from './OssApp.MasterPageComponent';
import { HeaderComponent } from '../Common/Header/Header.component';
import { SidebarComponent } from '../Common/Sidebar/Sidebar.component';
import { MainRoutes } from '../Routing/OssApp.MainRouting';
import { GcommsService } from '../Services/Gcomms.service';
import { NeXToolService } from '../Services/NeXTool.service';
import { FooterComponent } from '../Common/Foot/Footer.component';
import { HttpClientModule } from '@angular/common/http';
import { AppModule } from '../app.module';
import { HomeComponent } from './Home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
      MasterPageComponent,HeaderComponent,SidebarComponent,FooterComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(MainRoutes),
    FormsModule,HttpClientModule,AppModule, BrowserAnimationsModule,ReactiveFormsModule

  ],


  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class MainModule { }
