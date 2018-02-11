import { Component, OnInit} from '@angular/core';
import * as _ from 'lodash';
import {Parser} from 'xml2js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['../sass/module/app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'TestTitle';

  ngOnInit() {
    console.log(_.chunk(['a', 'b', 'c', 'd'], 2));
   
    const xml = "<root>Hello xml2js!</root>";

    const par = new Parser();

    par.parseString(xml,  function (err, result) {
      console.dir(result);
   });   
 }
}
