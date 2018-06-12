import { Component} from '@angular/core';
import { Disease } from '../data-model/disease';
import { DISEASES } from '../data-model/diseases'
import { CategoryService} from '../services/category.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent  {
  categories : Disease[];

  constructor() {
    this.categories = DISEASES;
  }
 

}

