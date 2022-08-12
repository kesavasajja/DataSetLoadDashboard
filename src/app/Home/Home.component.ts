import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { ThemeService } from 'ng2-charts';
import { DatasetService } from '../Services/dataset.service';
import { DbName } from './datasets/dataset.model';

@Component({
  selector: 'OssApp-home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {
  _datasets: DbName[]= [];

  _dateColumnNextTool : any = [];

  _dateColumnGcomms : any = [];

  _dateNumbersNextTool: number[] = [];


  _dateNumbersGcomms: number[] = [];

  //test : any = [1,2,3,4]
  constructor(private datasetService: DatasetService) {


  }

  salesData: ChartData<'line'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],

    datasets: [
      {
        label: 'NExTool',
        data: [],
        tension: 1
       },
      // {
      //   label: 'Gcomms',
      //   data: [],
      //   tension: 1
      // }
    ],
  };
  chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Monthly Datasets Update',
      },
    },
  };


  ngOnInit() {
       this.getBarChartDatasets();

    }

    loadData(_dateNumbersNextTool: number[],_dateNumbersGcomms : number[]){
      // for(let i=0; i<5; i++ ){
      //   this.salesData.datasets[0].data.push(_dateNumbersNextTool[i]);
      // }
      var dateNumbersGcomms = [];

      for(let i=0; i<_dateNumbersGcomms.length; i++){
        if(_dateNumbersGcomms[i] > 0){
          dateNumbersGcomms.push(_dateNumbersGcomms[i]);
        }
      }

      console.log(dateNumbersGcomms);

      this.salesData  = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],

        datasets: [
          {
            label: 'NExTool',
            data: _dateNumbersNextTool,
            tension: 1
           },
          {
            label: 'Gcomms',
            data: dateNumbersGcomms,
            tension: 1
          }
        ],
      };
    }

    getBarChartDatasets()
    {
      this.datasetService.getBarChartDatasets().subscribe(
        (response: any) => {
          //console.log(response );
          this._datasets = response;
          //console.log(this._datasets)
          for(let i=0; i<this._datasets.length; i++)
          {
            if(this._datasets[i].used_by == 'NExTool'){
              this._dateColumnNextTool[i] = this._datasets[i].delivery_date;
            }
            if(this._datasets[i].used_by == 'Gcomms'){
              this._dateColumnGcomms[i] = this._datasets[i].delivery_date;
            }
          }
          // console.log(this._dateColumnNextTool);
          // console.log(this._dateColumnGcomms);

          for(let i=0; i<this._dateColumnNextTool.length; i++){
            try{
              this._dateNumbersNextTool[i] = Number(this._dateColumnNextTool[i].substring(3,5));
            }catch(e){

            }
          }

          for(let i=0; i<this._dateColumnGcomms.length; i++){
            try{
              this._dateNumbersGcomms[i] = Number(this._dateColumnGcomms[i].substring(3,5));
            }catch(e){

            }
          }

          // console.log(this._dateNumbersGcomms);

          // console.log(this._dateNumbersNextTool);
          this.loadData(this._dateNumbersNextTool,this._dateNumbersGcomms);

        }
      );
    }


  }



