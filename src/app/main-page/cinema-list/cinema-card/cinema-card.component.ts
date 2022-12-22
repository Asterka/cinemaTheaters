import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ICinema } from 'src/shared/models/ICinema';

@Component({
  selector: 'app-cinema-card',
  templateUrl: './cinema-card.component.html',
  styleUrls: ['./cinema-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CinemaCardComponent implements OnInit {

  @Input()
  cinema: ICinema = {};

  constructor() { }

  ngOnInit(): void {}

}
