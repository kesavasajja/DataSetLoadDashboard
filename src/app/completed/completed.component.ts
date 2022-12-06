import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DbName } from '../Home/datasets/dataset.model';
import { DatasetService } from '../Services/dataset.service';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {

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
  form: any;
  submitted!: boolean;

  dtOptions: DataTables.Settings = {};
  http: any;
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private datasetService : DatasetService, private fb : FormBuilder )
   {

    this.getDatasetsCompleted();

   }

  ngOnInit() : void{


    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2,
      processing: true
    };








  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }


  getDatasetsCompleted() {
    this.datasetService.getDatasetsCompleted()
    .subscribe(
      response => {
        console.log(response );
        this._datasets = response;
        console.log(this._datasets)
      }
    );
  }

  populateForm(dataset: DbName)
{

  this.dataset = dataset;

}

deleteDataset(dataset: DbName)
{
  console.log("t_id")
  this.datasetService.deleteDataset(dataset)
  .subscribe(
    response => {
     alert(" record deleted successfully");
    //this.toast.success({detail:"Success Message", summary:"Dataset deleted successfully", duration:2000})
      this.getDatasetsCompleted();
    },
    err=>{
         alert("something went wrong")
        // this.toast.error({detail:"Error Message", summary:"Dataset not updated", duration:2000})
       }
  );
}

updateDataset(dataset: DbName) {

  this.datasetService.updateDataset(dataset)
  .subscribe(
    response => {
      alert(" record updated successfully");
      //this.toast.success({detail:"Success Message", summary:"Dataset updated successfully", duration:2000})
      this.getDatasetsCompleted();
    },
    err=>{
      alert("something went wrong")
     //this.toast.error({detail:"Error Message", summary:"Dataset not updated", duration:2000})


    }
  );
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
    this.getDatasetsCompleted();
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
     // edit:'Edit',
     // delete:'Delete'
   };
   }
 );

 } else{
   this.updateDataset(this.dataset)
   this.form.markAsUntouched();
 }
}






  key: string = 'id';
reverse: boolean = false;
  sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }


}
