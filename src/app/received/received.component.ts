import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DbName } from '../Home/datasets/dataset.model';
import { DatasetService } from '../Services/dataset.service';

@Component({
  selector: 'app-received',
  templateUrl: './received.component.html',
  styleUrls: ['./received.component.css']
})
export class ReceivedComponent implements OnInit {

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
    delivery_date:new Date,
    frequency_from_OS:'',
    next_Update:'',
    used_by:'',
    supply_format:'',
    status_ID: ''

  }

  constructor(private datasetService : DatasetService, private fb : FormBuilder )
   {

   }

  ngOnInit() {

    this.getDatasetsReceived();



  }

  getDatasetsReceived() {
    this.datasetService.getDatasetsReceived()
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
