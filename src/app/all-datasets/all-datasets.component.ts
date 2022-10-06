import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ColDef,  ColumnApi, ColumnResizedEvent, FirstDataRenderedEvent, GridApi, GridOptions, GridReadyEvent } from 'ag-grid-community';
import { DbName } from '../Home/datasets/dataset.model';
import { DbNameModel } from '../Home/datasets/datasets';
import { DatasetService } from '../Services/dataset.service';
import {HeaderComponent} from 'src/app/Common/Header/Header.component'




@Component({
  selector: 'app-all-datasets',
  templateUrl: './all-datasets.component.html',
  styleUrls: ['./all-datasets.component.css']
})


export class AllDatasetsComponent implements OnInit {


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
  constructor(private datasetService : DatasetService, private fb : FormBuilder ) {


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

    this.getDatasets();


  }


  getDatasets() {
    this.datasetService.getDatasets()
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
       this.getDatasets();
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
        this.getDatasets();
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
      this.getDatasets();
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






