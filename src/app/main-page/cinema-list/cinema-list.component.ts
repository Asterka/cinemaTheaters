import { IListWithLoader } from './../IListWithLoader';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinema-list',
  templateUrl: './cinema-list.component.html',
  styleUrls: ['./cinema-list.component.scss']
})
export class CinemaListComponent implements OnInit, IListWithLoader {

  constructor() { }

  ngOnInit(): void {
  }

  loadData(): void {
    throw new Error('Method not implemented.');
  }

}
