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
    delivery_date:new Date,
    frequency_from_OS:'',
    next_Update:'',
    used_by:'',
    supply_format:'',
    status_ID: ''

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


  }



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
        delivery_date:new Date,
        frequency_from_OS:'',
        next_Update:'',
        used_by:'',
        supply_format:'',
        status_ID: ''
     };
     }
   );

   } else{
     this.updateDataset(this.dataset)
     this.form.markAsUntouched();
   }
 }

}



