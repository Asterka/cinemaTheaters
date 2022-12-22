import { NetworkLayerService } from 'src/shared/services/network-layer.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class CinemaFacadeService {
  totalCinemas: BehaviorSubject<number> = new BehaviorSubject(0);
  currentCinemaList: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor(private network: NetworkLayerService) {}

  requestCinemaNumber() {
    this.network.getEntityNumber(environment.CINEMA_URL).subscribe({
      next: (number) => {
        this.totalCinemas.next(number);
      },
    });
  }

  requestCinemaList(page: number, offset: number) {
    this.network
      .getEntityList(environment.CINEMA_URL, page, undefined, offset)
      .subscribe({ next: (cinemas) => {
        console.log(cinemas);
        this.currentCinemaList.next(cinemas);
      }
    });
  }
}
