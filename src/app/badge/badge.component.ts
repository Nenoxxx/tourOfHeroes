import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
  standalone: true
})
export class BadgeComponent {
  @Input() index: number = 0;
  @Input() heroId: number = 0;
  @Output() badgeClicked: EventEmitter<number> = new EventEmitter<number>();

  onClick() {
    this.badgeClicked.emit(this.heroId);
  }
}
