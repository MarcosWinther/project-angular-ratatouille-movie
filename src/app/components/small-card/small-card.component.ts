import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {
  @Input() public photoCover: string = '';
  @Input() public cardTitle: string = '';
  @Input() public Id: string = '0';
}
