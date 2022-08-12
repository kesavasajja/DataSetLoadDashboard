import { Component, OnInit } from '@angular/core';
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

  data: DbName[] = [];
  currentPage: string = '';
  totalPage: string = '';
  datasets!: DbNameModel ;
    Pageindex: any = 1;
  pageNumber: boolean[] = [];
  i : any;

   //Pagination Variables

   pageField : number[] = [];
   exactPageList: any;
   paginationData!: number;
   datasetsPerPage: any = 5;
  //  totalCompanies: any;
   totalGcommsDatasetsCount: any;

  searchText:any;
  form : FormGroup;
  p:number = 1;
 pageSize: number = 25;
  _datasets: DbName[]= [];
  dataset: DbName = {
    dataset_id:0,
    dataset_name: '',
    age_of_data:'',
    frequency_Internally:'',
    status:'',
    source:'',
    delivery_method:'',
    delivery_date:'',
    frequency_from_OS:'',
    next_Update:'',
    used_by:'',
    supply_format:''

  }
 constructor(private datasetService : DatasetService, private fb : FormBuilder,  public paginationService: PaginationService ){

  this.form = this.fb.group({
    DatasetName: ['',[Validators.required]],
    AgeOfData: ['',[Validators.required]],
    Frequency: ['',[Validators.required]],
    status:['',[Validators.required]],
    source:  ['',[Validators.required]],
    delivery_method:['',[Validators.required]],
    delivery_date:['',[Validators.required]],
    frequency_from_OS:['',[Validators.required]],
    next_Update:['',[Validators.required]],
    usedBy: ['',[Validators.required]],
    supplyFormat: ['',[Validators.required]],


  })


 }

 get control() { return this.form.controls; }
  ngOnInit() {

    this.getDatasetsGcomms();
    this.getGcommsDatasetsCount();
    this.getAllGcommsDatasetsCount();
    this.totalNoOfPages();
    this.pageNumber[0] = true;
    this.paginationService.temppage = 0;
    this.getGcommsDatasetsPagination();

  }

  getGcommsDatasetsCount()
  {
    this.datasetService.getGcommsDatasetsCount()
    .subscribe(
      response => {
        console.log(response );
        this._datasets = response;
        console.log(this._datasets.length)
        this.totalPage = (Number(this._datasets.length)/5).toString();
      }
    );
  }

  getGcommsDatasetsPagination()
  {
    this.datasetService.getGcommsDatasetsPagination
    (this.Pageindex).subscribe((data: any) => {
      this.datasets = data;
     // this.totalNExtoolDatasetsCount();
      console.log(this.datasets)
      this.data = this.datasets.dbNames;
      this.currentPage = (this.datasets.CurrentIndex).toString();
    })
  }


  getDatasetsGcomms() {
    this.datasetService.getDatasetsGcomms()
    .subscribe(
      response => {
        console.log(response );
        this._datasets = response;
        console.log(this._datasets)
      }
    );
  }

  deleteDataset(dataset: DbName)
 {
   //console.log(dataset_id)
   this.datasetService.deleteDataset(dataset)
   .subscribe(
     response => {
      alert(" record deleted successfully");
       this.getDatasetsGcomms();
     },
     err=>{
          alert("something went wrong")
        }
   );
 }

 populateForm(dataset: DbName)
 {
   this.dataset = dataset;
 }
  updateDataset(dataset: DbName) {

    this.datasetService.updateDataset(dataset)
    .subscribe(
      response => {
        alert(" record updated successfully");
        this.getDatasetsGcomms();
      },
      err=>{
        alert("something went wrong")
      }
    );
  }
key: string = 'id';
reverse: boolean = false;
  sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }


  //Method For Pagination
  totalNoOfPages() {

    this.paginationData = Number(this.totalGcommsDatasetsCount / this.datasetsPerPage);
    let tempPageData = this.paginationData.toFixed();
    if (Number(tempPageData) < this.paginationData) {
      this.exactPageList = Number(tempPageData) + 1;
      this.paginationService.exactPageList = this.exactPageList;
    } else {
      this.exactPageList = Number(tempPageData);
      this.paginationService.exactPageList = this.exactPageList
    }
    this.paginationService.pageOnLoad();
    this.pageField = this.paginationService.pageField;

  }

  showDatasetsByPageNumber(page: any, i: number) {
   this.data = [];
    this.pageNumber = [];
    this.pageNumber[i] = true;
    this.Pageindex = page;
     this.getGcommsDatasetsPagination();
  }

  getAllGcommsDatasetsCount() {
    this.datasetService.getGcommsDatasetsCount().subscribe((res: any) => {
      this.totalGcommsDatasetsCount = res;
      this.totalNoOfPages();
    })
  }

}
