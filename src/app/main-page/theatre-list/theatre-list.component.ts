import { TheatreFacadeService } from './theatre-facade.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IListWithLoader } from '../IListWithLoader';

@Component({
  selector: 'app-theatre-list',
  templateUrl: './theatre-list.component.html',
  styleUrls: ['./theatre-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TheatreFacadeService]
})
export class TheatreListComponent implements OnInit, IListWithLoader {

  constructor( public facade: TheatreFacadeService ) { }

  ngOnInit(): void {
    this.initialize();
  }

  initialize(){
    this.facade.requestTheatreNumber();
    this.facade.requestTheatreList(0, 5);
  }

  loadData(): void {
    throw new Error('Method not implemented.');
  }

  pageChanged(event: {page: number, first: number, rows: number}){
    this.facade.requestTheatreList(event.page, event.rows);
  }
}
