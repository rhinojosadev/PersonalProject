import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.pug',
  styleUrls: ['../../sass/module/card.component.scss']
})
export class CardComponent {
    @Input()  title: string;
    @Input()  imageUrl: string;
}
