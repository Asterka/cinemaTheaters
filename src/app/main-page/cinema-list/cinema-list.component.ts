import { IListWithLoader } from './../IListWithLoader';
import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { CinemaFacadeService } from './cinema-facade.service';

@Component({
  selector: 'app-cinema-list',
  templateUrl: './cinema-list.component.html',
  styleUrls: ['./cinema-list.component.scss'],
  providers: [CinemaFacadeService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CinemaListComponent implements OnInit, IListWithLoader {

  constructor(public facade: CinemaFacadeService) { }

  ngOnInit(): void {
    this.initialize();
  }

  initialize(){
    this.facade.requestCinemaNumber();
  }

  loadData(): void {
    throw new Error('Method not implemented.');
  }

}
