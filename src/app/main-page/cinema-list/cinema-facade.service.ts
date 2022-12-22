import { NetworkLayerService } from 'src/shared/network-layer.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class CinemaFacadeService {

  totalCinemas: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor(private network: NetworkLayerService) { }

  requestCinemaNumber(){
    this.network.getEntityNumber(environment.CINEMA_URL).subscribe({next: number => {
      this.totalCinemas.next(number);
    }})
  }

}
