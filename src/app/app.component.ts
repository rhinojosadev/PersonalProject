import { Component, OnInit} from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['../sass/module/app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'TestTitle';

  ngOnInit() {
    console.log(_.chunk(['a', 'b', 'c', 'd'], 2));
 }
}
