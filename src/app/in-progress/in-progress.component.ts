import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DbName } from '../Home/datasets/dataset.model';
import { DatasetService } from '../Services/dataset.service';

@Component({
  selector: 'app-in-progress',
  templateUrl: './in-progress.component.html',
  styleUrls: ['./in-progress.component.css']
})
export class InProgressComponent implements OnInit {

  pageSize: number = 25;
  form !: FormGroup;
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
  constructor(private datasetService : DatasetService, private fb : FormBuilder )
   {

   }
   get control() { return this.form.controls; }
  ngOnInit() {

    this.getDatasetsInProgress();



  }

  getDatasetsInProgress() {
    this.datasetService.getDatasetsInProgress()
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

  key: string = 'id';
reverse: boolean = false;
  sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }


}





