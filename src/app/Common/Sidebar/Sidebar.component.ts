import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { DatasetService } from 'src/app/Services/dataset.service';

@Component({
  selector: 'OssApp-Sidebar',
  templateUrl: './Sidebar.component.html',
})
export class SidebarComponent implements OnInit {

  Userid: any;
  datasetServices:any;

  constructor(private datasetService : DatasetService) {
    this.datasetServices=datasetService;
   }

  pageStart() {
    this.datasetServices.pageStart().subscribe(
      (data:any) => {
        console.log(data );
        this.Userid = data.username;
       // console.log(this.Userid)
      });

  }

  ngOnInit(): void {
    this.pageStart();
  }

}
