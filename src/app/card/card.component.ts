import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.pug',
  styleUrls: ['../../sass/module/card.component.scss']
})
export class CardComponent {
    @Input()  id: string;
    @Input()  title: string;
    @Input()  imageUrl: string;


    constructor(private router: Router) {}

    goToCommentSection() {
      this.router.navigate([this.router.url + '/comments/' + this.id]);
    }
}
