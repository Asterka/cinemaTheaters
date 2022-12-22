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
  }

  loadData(): void {
  }
}
