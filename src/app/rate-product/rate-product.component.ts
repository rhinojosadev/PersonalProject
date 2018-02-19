import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rate-product',
  templateUrl: './rate-product.component.pug',
  styleUrls: ['../../sass/module/rate-product.component.scss']
})
export class RateProductComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
