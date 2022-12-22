import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NetworkLayerService {

  constructor(private http: HttpClient) { }


  getEntityNumber(url: string): Observable<any>{
    return this.http.get(url + '/count', {params: {api_key: environment.API_KEY}})
  }

  getEntityList(url: string, pn: number, orderBy: string, offset: number) {
    this.http.get(url+'/rows', {params: {api_key: environment.API_KEY}}).subscribe(data => {
      console.log(data);
    })
  }
}
