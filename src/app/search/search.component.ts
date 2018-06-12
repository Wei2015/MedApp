import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { Summary } from '../data-model/summary';
import { TAGS } from '../data-model/diseases';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private infos_HIV: Array<Summary> = [];
  private infos_Diabetes: Array<Summary> = [];
  private infos_leukemia: Array<Summary> = [];
  private infos_lung_cancer: Array<Summary> = [];
  private infos_hepatitis: Array<Summary> = [];
  private infos_obesity: Array<Summary> = [];
  private infos_Alzheimer: Array<Summary> = [];
  private infos_cardiovascular: Array<Summary> = [];
  private infos_infertility: Array<Summary> = [];
 
  private today: Date;
  private startDate = "02-01-2018";

  constructor(private searchService: SearchService) { 
              this.today = new Date();
            }

  getDate(date: Date): string{
      let dateToday= "";
    if ((date.getMonth()+1)<10) {
          dateToday += "0";
    } 
    dateToday += date.getMonth()+1 +"-";
              
    if ((date.getDate()<10)){
        dateToday += "0";
    } 
    dateToday += (date.getDate())+"-"+date.getFullYear();
    return dateToday;
}

  ngOnInit() {


    let todayDate = this.getDate(this.today);

    this.searchService.getByTagByTime(TAGS[0], this.startDate, todayDate,'10')
       .subscribe(
         getInfo => this.infos_HIV = getInfo.Items,
         error => console.log(error));

    this.searchService.getByTagByTime(TAGS[1], this.startDate, todayDate,'10')
       .subscribe(
         getInfo => this.infos_Alzheimer = getInfo.Items,
         error => console.log(error));

    this.searchService.getByTagByTime(TAGS[2], this.startDate, todayDate,'10')
       .subscribe(
         getInfo => this.infos_cardiovascular = getInfo.Items,
         error => console.log(error));

    this.searchService.getByTagByTime(TAGS[3], this.startDate, todayDate,'10')
         .subscribe(
           getInfo => this.infos_Diabetes = getInfo.Items,
           error => console.log(error));

    this.searchService.getByTagByTime(TAGS[4], this.startDate, todayDate,'10')
          .subscribe(
            getInfo => this.infos_hepatitis = getInfo.Items,
            error => console.log(error));
  

    this.searchService.getByTagByTime(TAGS[5], this.startDate, todayDate,'10')
          .subscribe(
            getInfo => this.infos_infertility = getInfo.Items,
            error => console.log(error));

    this.searchService.getByTagByTime(TAGS[6], this.startDate, todayDate,'10')
         .subscribe(
           getInfo => this.infos_leukemia = getInfo.Items,
           error => console.log(error));

    this.searchService.getByTagByTime(TAGS[7], this.startDate, todayDate,'10')
         .subscribe(
           getInfo => this.infos_lung_cancer = getInfo.Items,
           error => console.log(error));

    this.searchService.getByTagByTime(TAGS[8], this.startDate, todayDate,'10')
           .subscribe(
             getInfo => this.infos_obesity = getInfo.Items,
             error => console.log(error));

 
   
  
  }


}
