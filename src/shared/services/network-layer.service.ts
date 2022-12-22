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

  getEntityList(url: string, pn?: number, orderBy?: string, offset?: number) {
    let params: any = {};
    if (pn !== undefined && pn !== null) {
      params['page'] = pn.toString();
    }
    if (orderBy !== undefined && orderBy !== null) {
      params['order'] = orderBy;
    }
    if (offset !== undefined && offset !== null) {
      params['offset'] = offset.toString();
    }

    //Вычисляем сколько строк пропустить
    let skip = pn!*(offset!-1);

    console.log('skip: ' + skip);
    console.log('top: ' + offset);


    return this.http.get(url+`/rows`, {params: {api_key: environment.API_KEY, '$skip':(skip?skip:0).toString(), '$top': offset?.toString()!}});
  }
}
