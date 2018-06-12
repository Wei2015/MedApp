import { Injectable } from '@angular/core';
import { Disease } from '../data-model/disease';
import { Http, Response } from '@angular/http';
import { ProcessHttpmsgService } from './process-httpmsg.service';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/observable/of";
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import { RestangularModule, Restangular } from 'ngx-restangular';

@Injectable()
export class CategoryService {

  constructor(private restangular: Restangular ) { }

  getCategories(): Observable<Disease[]> {
    return this.restangular.all('categories').getList();
  }

  getCategory(id: number): Observable<Disease> {
    return this.restangular.one('categories', id).get();
  }



}
