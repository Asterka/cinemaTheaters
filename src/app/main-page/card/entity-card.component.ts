import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { IEntity } from 'src/shared/models/IEntity';

@Component({
  selector: 'entity-card',
  templateUrl: './entity-card.component.html',
  styleUrls: ['./entity-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemCardComponent implements OnInit {

  @Input()
  item: IEntity = {};

  constructor() { }

  ngOnInit(): void {}

}
