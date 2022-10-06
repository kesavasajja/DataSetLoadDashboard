import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaginationService } from '../Services/pagination.service';
import { DbName } from '../Home/datasets/dataset.model';
import { DatasetService } from '../Services/dataset.service';
import { NeXToolService } from '../Services/NeXTool.service';
import { DbNameModel } from '../Home/datasets/datasets';


@Component({
  selector: 'OssApp-NeXTool',
  templateUrl: './NeXTool.component.html',
  styleUrls: ['./NeXTool.Component.css']
})
export class NeXToolComponent implements OnInit {

  // data: DbName[] = [];
  // currentPage: string = '';
  // totalPage: string = '';
  // datasets!: DbNameModel ;
  //   Pageindex: any = 1;
  // pageNumber: boolean[] = [];
  // i : any;

   //Pagination Variables

   pageField : number[] = [];
   exactPageList: any;
   paginationData!: number;
   datasetsPerPage: any = 5;
  //  totalCompanies: any;
   totalNExtoolDatasetsCount: any;

 searchText:any;
 p:number = 1;
 pageSize: number = 25;
  form : FormGroup;
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
    supply_format:'',
    status_ID: 0

  }
  submitted!: boolean;
  constructor(private datasetService : DatasetService, private fb : FormBuilder, public paginationService: PaginationService ) {


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
    status_ID:  ['',[Validators.required]],


  })
   }
   get control() { return this.form.controls; }
  ngOnInit() {

    this.getDatasetsNExTool();
   // this.getNExToolDatasetsCount();
   // this.getAllNExToolDatasetsCount();
   // this.totalNoOfPages();
   // this.pageNumber[0] = true;
   // this.paginationService.temppage = 0;
   // this.getNExToolDatasetsPagination();


  }

  // getNExToolDatasetsCount()
  // {
  //   this.datasetService.getNExToolDatasetsCount()
  //   .subscribe(
  //     response => {
  //       console.log(response );
  //       this._datasets = response;
  //       console.log(this._datasets.length)
  //       this.totalPage = (Number(this._datasets.length)/5).toString();
  //     }
  //   );
  // }

  // getNExToolDatasetsPagination()
  // {
  //   this.datasetService.getNExToolDatasetsPagination
  //   (this.Pageindex).subscribe((data: any) => {
  //     this.datasets = data;
  //    // this.totalNExtoolDatasetsCount();
  //     console.log(this.datasets)
  //     this.data = this.datasets.dbNames;
  //     this.currentPage = (this.datasets.CurrentIndex).toString();
  //   })
  // }


  getDatasetsNExTool() {
    this.datasetService.getDatasetsNExTool()
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
     //this.toast.success({detail:"Success Message", summary:"Dataset deleted successfully", duration:2000})
       this.getDatasetsNExTool();
     },
     err=>{
          alert("something went wrong")
          //this.toast.error({detail:"Error Message", summary:"Dataset not updated", duration:2000})
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
        //this.toast.success({detail:"Success Message", summary:"Dataset updated successfully", duration:2000})
        this.getDatasetsNExTool();
      },
      err=>{
        alert("something went wrong")
       //this.toast.error({detail:"Error Message", summary:"Dataset not updated", duration:2000})


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
  // totalNoOfPages() {

  //   this.paginationData = Number(this.totalNExtoolDatasetsCount / this.datasetsPerPage);
  //   let tempPageData = this.paginationData.toFixed();
  //   if (Number(tempPageData) < this.paginationData) {
  //     this.exactPageList = Number(tempPageData) + 1;
  //     this.paginationService.exactPageList = this.exactPageList;
  //   } else {
  //     this.exactPageList = Number(tempPageData);
  //     this.paginationService.exactPageList = this.exactPageList
  //   }
  //   this.paginationService.pageOnLoad();
  //   this.pageField = this.paginationService.pageField;

  // }

  // showDatasetsByPageNumber(page: any, i: number) {
  //  this.data = [];
  //   this.pageNumber = [];
  //   this.pageNumber[i] = true;
  //   this.Pageindex = page;
  //    this.getNExToolDatasetsPagination();
  // }

  // getAllNExToolDatasetsCount() {
  //   this.datasetService.getNExToolDatasetsCount().subscribe((res: any) => {
  //     this.totalNExtoolDatasetsCount = res;
  //     this.totalNoOfPages();
  //   })
  // }
  onSubmit(){

    this.submitted = true;


    if (this.form.invalid) {

     this.form.markAllAsTouched()
     console.log("invalid");
     return;
   }

  //  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.form.value, null, 4));
   this.form.markAsUntouched();


   if (this.dataset.dataset_id === 0)
   {
     console.log(this.dataset)
     this.datasetService.postDataset(this.dataset)
   .subscribe(
     response => {
      console.log(response);
      this.getDatasetsNExTool();
      this.dataset = {
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
        supply_format:'',
        status_ID: 0
     };
     }
   );

   } else{
     this.updateDataset(this.dataset)
     this.form.markAsUntouched();
   }
 }

}



