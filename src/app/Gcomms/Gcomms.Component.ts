import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { DbName } from '../Home/datasets/dataset.model';
import { GcommsService } from '../Services/Gcomms.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DbNameModel } from '../Home/datasets/datasets';
import { DatasetService } from '../Services/dataset.service';
import { PaginationService } from '../Services/pagination.service';
@Component({
  selector: 'OssApp-Gcomms',
  templateUrl: './Gcomms.component.html',
  styleUrls: ['./Gcomms.Component.css']
})
export class GcommsComponent implements OnInit {





  ngOnInit(){


  }

}
