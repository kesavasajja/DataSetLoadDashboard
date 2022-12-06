import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { ApexNonAxisChartSeries, ApexChart } from 'ng-apexcharts';
import { DbName } from './datasets/dataset.model';
import { DatasetService } from '../Services/dataset.service';
import { SqlData } from './datasets/SqlData';
import { StatusCount } from './datasets/StatusCount';
import { ClientRequest } from 'http';



@Component({
  selector: 'OssApp-home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {

  //Pie chart

  chartSeries:
  ApexNonAxisChartSeries = [];

chartDetails: ApexChart = {


  width: 300,


  type : 'pie',
  toolbar: {
    show : true
  },


}



chartTitle: ApexTitleSubtitle = {

  text : 'Status of Datasets',
  align: 'center',


};

responsiveChart: ApexLegend = {
  position: "left",

}
chartDataLabels : ApexDataLabels = {
  enabled: false,
}
chartLabels = ["InProgress", "OnHold", "Completed", "Received"]


// pie chart

_pieCount: StatusCount[] = [];

_completedCount: any;
_receivedCount: any;
_inprogressCount: any;

_onHoldCount: any;

_result: any[] = [];


// bar chart
  _datasets: DbName[] = [];

  _graphData: SqlData[] = [];

  _dateColumnNextTool: any = [];

  _dateColumnGcomms: any = [];



  _dateNumbersNextTool: number[] = [];


  _dateNumbersGcomms: number[] = [];


  constructor(private datasetService: DatasetService) {



  }

 //Bar chart
  salesdata: ChartData<'line'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Oct', 'Nov', 'Dec'],

    datasets: [
      {
        label: 'NExTool',
        data: [],
        tension: 1
      },
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

    this.getDatasetsStatusCount();
    this.getBarChartDatasets();


  }

  loadData(_dateNumbersNextTool: number[], _dateNumbersGcomms: number[]) {


    this.salesdata = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug','Sep', 'Oct', 'Nov', 'Dec'],

      datasets: [
        {
          label: 'NExTool',
          data: _dateNumbersNextTool,
          tension: 1
        },
        {
          label: 'Gcomms',
          data: _dateNumbersGcomms,
          tension: 1
        }
      ],
    };
  }

  getBarChartDatasets() {
    this.datasetService.getBarChartDatasets().subscribe(
      (response: any) => {
        //console.log(response );
        this._graphData = response;
        // console.log(this._graphData)
        // console.log(this._graphData.length)
        for (let j = 0; j < 12; j++) {
          for (let i = 0; i < this._graphData.length; i++) {
            if (this._graphData[i].used_by == 'NExTool') {
              if (this._graphData[i].month == j+1) {
                this._dateNumbersNextTool[j] = this._graphData[i].count;
                break;
              }
              else {
                this._dateNumbersNextTool[j] = 0;
              }
            }
          }
        }

        for (let j = 0; j < 12; j++) {
          for (let i = 0; i < this._graphData.length; i++) {
            if (this._graphData[i].used_by == 'Gcomms') {
              if (this._graphData[i].month == j+1) {
                this._dateNumbersGcomms[j] = this._graphData[i].count;
                break;
              }
              else {
                this._dateNumbersGcomms[j] = 0;
              }
            }
          }
        }

        this.loadData(this._dateNumbersNextTool, this._dateNumbersGcomms);

      }
    );
  }






  getDatasetsStatusCount() {
    this.datasetService.getDatasetsStatusCount().subscribe(
      (response: any) => {
        console.log(response );
        this._pieCount = response;
         console.log(this._pieCount)
         console.log(this._pieCount.length)

          for (let i = 0; i < this._pieCount.length; i++) {

       // console.log("value : "+this._pieCount[i].status_ID);

           if (this._pieCount[i].status_ID == 'completed')
             {

              this._completedCount = this._pieCount[i].total;
              //console.log("comp"+this._completedCount);
              //  break;
             }

            //  else
              if (this._pieCount[i].status_ID == 'Received')
             {
              this._receivedCount = this._pieCount[i].total;
              //console.log("re"+this._receivedCount);
              // break;
             }
            //  else
             if (this._pieCount[i].status_ID == 'In Progress')
             {
                 this._inprogressCount = this._pieCount[i].total;
                // console.log("in"+this._inprogressCount);
                //  break;
             }
             else{
              this._onHoldCount = this._pieCount[i].total;
             // console.log("on"+this._onHoldCount)
              // break;
             }
          }






        this.loadData(this._completedCount, this._receivedCount);

        this.loadData(this._onHoldCount, this._inprogressCount);


        console.log("value : "+this._completedCount);
        console.log("value : "+this._receivedCount);
        console.log("value : "+this._onHoldCount);
        console.log("value : "+this._inprogressCount);

        this._result = [this._completedCount, this._receivedCount, this._onHoldCount, this._inprogressCount];
        this.chartSeries=this._result;
        console.log("final result"+this._result);

      }
    );
  }







}




