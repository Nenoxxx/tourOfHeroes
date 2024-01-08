import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
  standalone: true
})
export class BadgeComponent {
  @Input() index: number = 0;
  @Input() heroId: number = 0;
}
