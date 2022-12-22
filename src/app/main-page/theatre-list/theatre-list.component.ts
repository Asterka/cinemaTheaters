import { Component, OnInit } from '@angular/core';
import { IListWithLoader } from '../IListWithLoader';

@Component({
  selector: 'app-theatre-list',
  templateUrl: './theatre-list.component.html',
  styleUrls: ['./theatre-list.component.scss']
})
export class TheatreListComponent implements OnInit, IListWithLoader {

  constructor() { }

  ngOnInit(): void {
  }

  loadData(): void {
    throw new Error('Method not implemented.');
  }
}
