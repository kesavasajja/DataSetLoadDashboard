import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DbName } from 'src/app/Home/datasets/dataset.model';
import { DbNameModel } from 'src/app/Home/datasets/datasets';
import { DatasetService } from 'src/app/Services/dataset.service';

import { AllDatasetsComponent } from 'src/app/all-datasets/all-datasets.component';

@Component({
  selector: 'OssApp-header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css']
})
export class HeaderComponent implements OnInit {
  //public header:HeaderComponent = new HeaderComponent(new FormBuilder, new NgToastService);

  form : FormGroup;
  _datasets: DbName[]= [];
  dataset: DbName = {
    dataset_id: 0,
    dataset_name: '',
    age_of_data: '',
    frequency_Internally: '',
    status: '',
    source: '',
    delivery_method: '',
    delivery_date: new Date,
    frequency_from_OS: '',
    next_Update: '',
    used_by: '',
    supply_format: '',
    status_ID: ''

  }
  submitted!: boolean;
  constructor( private dataService: DatasetService ,private fb : FormBuilder ) {

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
    status_ID: ['',[Validators.required]],


  })
   }
   get control() { return this.form.controls; }
  ngOnInit() {





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



  onSubmit(){

    this.submitted = true;


    if (this.form.invalid) {

     this.form.markAllAsTouched()
     console.log("invalid");
     return;
   }

  //  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.form.value, null, 4));

   this.form.markAsUntouched();



 }

}








