import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { RateProduct } from './rate-product';

@Component({
  selector: 'app-rate-product',
  templateUrl: './rate-product.component.pug',
  styleUrls: ['../../sass/module/rate-product.component.scss']
})
export class RateProductComponent implements OnInit {

  @Input() title: string;
  @Input() type: string;
  @Output() onSubmitReviewMovie: EventEmitter<RateProduct> = new EventEmitter<RateProduct>();
  onSubmitReviewBook: EventEmitter<RateProduct> = new EventEmitter<RateProduct>();
  model = new RateProduct();

  constructor() { }

  ngOnInit() {}

  onSubmitRate() {
     switch (this.type) {
       case 'movie':
          this.onSubmitReviewMovie.emit(this.model);
       break;
       case 'book':
          this.onSubmitReviewBook.emit(this.model);
       break;
     }

  }

}
