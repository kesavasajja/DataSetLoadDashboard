import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DbName } from '../Home/datasets/dataset.model';
import { DatasetService } from '../Services/dataset.service';

@Component({
  selector: 'app-on-hold',
  templateUrl: './on-hold.component.html',
  styleUrls: ['./on-hold.component.css']
})
export class OnHoldComponent implements OnInit {

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

  constructor(private datasetService : DatasetService, private fb : FormBuilder )
   {

   }

  ngOnInit() {

    this.getDatasetsOnHold();



  }

  getDatasetsOnHold() {
    this.datasetService.getDatasetsOnHold()
    .subscribe(
      response => {
        console.log(response );
        this._datasets = response;
        console.log(this._datasets)
      }
    );
  }



  key: string = 'id';
reverse: boolean = false;
  sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }


}
