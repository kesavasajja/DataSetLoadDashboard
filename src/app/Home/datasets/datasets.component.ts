import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatasetService } from 'src/app/Services/dataset.service';
import { DbName } from './dataset.model';

@Component({
  selector: 'app-datasets',
  templateUrl: './datasets.component.html',
  styleUrls: ['./datasets.component.css']
})
export class DatasetsComponent implements OnInit {
  form : FormGroup;
  submitted = false;

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


  constructor(private datasetService:DatasetService,  private fb: FormBuilder) {
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
      status_ID: ['',[Validators.required]]


    })

   }

  ngOnInit(): void {

    this.getDatasets();
    this.datasetService.getDatasets().subscribe(
      data => {this._datasets =data,

      console.log("response recieved",data);
      },
      error => console.log("response not recieved"))



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
  get control() { return this.form.controls; }
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
        delivery_date:new Date,
        frequency_from_OS:'',
        next_Update:'',
        used_by:'',
        supply_format:'',
        status_ID: '',

     };
     }
   );

   } else{
     this.updateDataset(this.dataset)
     this.getDatasets;
     this.form.markAsUntouched();
   }
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
       this.getDatasets();
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
      this.form.markAsUntouched();
    },
    err=>{
      alert("something went wrong")
    }
  );
}



}
