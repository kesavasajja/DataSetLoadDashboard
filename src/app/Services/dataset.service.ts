import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DbName } from '../Home/datasets/dataset.model';
import { DbNameModel } from '../Home/datasets/datasets';
import { AllDatasetsComponent } from 'src/app/all-datasets/all-datasets.component';

@Injectable({
  providedIn: 'root'
})
export class DatasetService {

  baseUrl='https://localhost:7211/Gcomms';

  constructor(private _http:HttpClient) { }

  getDatasets(): Observable<DbName[]>
  {
       return this._http.get<DbName[]>(this.baseUrl+'/getDatasets');
  }

    getNExToolDatasetsCount(): Observable<DbName[]>
    {
         return this._http.get<DbName[]>(this.baseUrl+'/getNExToolDatasetsCount');
    }

    getGcommsDatasetsCount(): Observable<DbName[]>
    {
         return this._http.get<DbName[]>(this.baseUrl+'/getGcommsDatasetsCount');
    }


    getTotalDatasetsCount(): Observable<DbName[]>
    {
         return this._http.get<DbName[]>(this.baseUrl+'/getGcommsDatasetsCount');
    }



  getDatasetsPagination(id : any): Observable<DbNameModel[]>
  {
       return this._http.get<DbNameModel[]>(this.baseUrl+'/getDatasetsPagination'+'?Currentpage='+id);
  }

  getGcommsDatasetsPagination(id : any): Observable<DbNameModel[]>
  {
       return this._http.get<DbNameModel[]>(this.baseUrl+'/getGcommsDatasetsPagination'+'?Currentpage='+id);
  }

  getNExToolDatasetsPagination(id : any): Observable<DbNameModel[]>
  {
       return this._http.get<DbNameModel[]>(this.baseUrl+'/getNExToolDatasetsPagination'+'?Currentpage='+id);
  }

    getDatasetsNExTool(): Observable<DbName[]>
    {
         return this._http.get<DbName[]>(this.baseUrl+'/getDatasetsNExTool');
      }

      getDatasetsInProgress(): Observable<DbName[]>
      {
           return this._http.get<DbName[]>(this.baseUrl+'/getDatasetsInProgress');
      }

      getDatasetsOnHold(): Observable<DbName[]>
      {
           return this._http.get<DbName[]>(this.baseUrl+'/getDatasetsOnHold');
      }

      getDatasetsReceived(): Observable<DbName[]>
      {
           return this._http.get<DbName[]>(this.baseUrl+'/getDatasetsReceived');
      }

        getDatasetsCompleted(): Observable<DbName[]>
      {
           return this._http.get<DbName[]>(this.baseUrl+'/getDatasetsCompleted');
        }

      getBarChartDatasets(): Observable<DbName[]>
      {
           return this._http.get<DbName[]>(this.baseUrl+'/getBarChartDatasets');
      }

        getDatasetsGcomms(): Observable<DbName[]>
      {
           return this._http.get<DbName[]>(this.baseUrl+'/getDatasetsGcomms');
        }


    postDataset(dataset: DbName): Observable<DbName> {
      console.log(dataset)

      return this._http.post<DbName>(this.baseUrl+'/postDatasets', dataset);

    }

    deleteDataset(dataset: DbName): Observable<DbName>
    {
      return this._http.post<DbName>(this.baseUrl+'/deleteDatasets',dataset);
    }

    updateDataset(dataset: DbName): Observable<DbName>
    {
      return this._http.post<DbName>(this.baseUrl+'/updateDatasets' + '/' + dataset.dataset_id, dataset);
    }

}
