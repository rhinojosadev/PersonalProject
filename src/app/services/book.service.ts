import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class BookService {

  private url = 'https://www.goodreads.com';
  private key = 'mmDdscc3BERnfZUuRBLCA';
  private userId = '77323311';

  private urlGetBook = '/review/list/' + this.userId + '.xml?key=';


  constructor(private http: Http) { }

  getBooks() {
    return this.http.get(this.url + this.urlGetBook + this.key);
  }

}
