import { NetworkLayerService } from 'src/shared/services/network-layer.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class TheatreFacadeService {

  totalTheatres: BehaviorSubject<number> = new BehaviorSubject(0);
  currentTheatreList: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor(private network: NetworkLayerService) { }

  requestTheatreNumber(){
    this.network.getEntityNumber(environment.THEATRE_URL).subscribe({next: number => {
      this.totalTheatres.next(number);
    }})
  }

  requestTheatreList(page: number, offset: number) {
    this.network
      .getEntityList(environment.THEATRE_URL, page, undefined, offset)
      .subscribe({ next: (cinemas) => {
        console.log(cinemas);
        this.currentTheatreList.next(cinemas);
      }
    });
  }

}
