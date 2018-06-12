import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchInput} from'../data-model/searchInput';
import { SearchService } from '../services/search.service';
import { Summary } from '../data-model/summary';
import { Word } from '../data-model/word';
import { TAGS } from '../data-model/diseases';

@Component({
  selector: 'search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {


  infos: Array<Summary> = [];
  words: Array<Word>= [];
  minDate = new Date(2018, 0, 1);
  maxDate = new Date();
  fromDate: Date;
  toDate: Date;

  fDate = this.minDate;

  keyword: string;
  inputContent: SearchInput;

  @ViewChild('f') form : any;


  
  constructor(private searchService: SearchService) { 
  }

  ngOnInit () {
    this.inputContent = new SearchInput();
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

  getFromDate(newDate){
    this.fDate = newDate;
    this.fromDate = newDate;
    this.inputContent.fromDate = this.getDate(newDate);

  }
  getToDate(newDate){
    this.toDate = newDate;
    this.inputContent.toDate = this.getDate(newDate);
  }

  onSubmit() {

    //convert input into string with ','
    let modInput = this.inputContent.keyword.trim().toLowerCase().replace(" ", ",");
    //convert input into a string array
    var searchKeyWord :string[];
      searchKeyWord = [];
      if (modInput.includes(",")) {
        searchKeyWord = modInput.split(",");
      } else {
        searchKeyWord.push(modInput);
      }    

    //if input matches tag word, then use tag to search
    if (TAGS.includes(modInput)) {
        this.searchService.getByTagByTime(modInput, this.inputContent.fromDate, 
            this.inputContent.toDate, this.inputContent.numberOfItems)
                .subscribe(
                      getInfo => this.infos = getInfo.Items,
                      error => console.log(error));
    } else {
      //use input for as keyword to search
      this.searchService.getByKeywordByTime(modInput, this.inputContent.fromDate, 
                                    this.inputContent.toDate, this.inputContent.numberOfItems)
                        .subscribe(
                          getInfo => { this.infos = getInfo.Items
                            //if no return with keyword, call association word API return a list of related words
                            let index; 
                            for (index=0; index<searchKeyWord.length; ++index){
                                this.searchService.getRelatedWord(searchKeyWord[index])
                                      .subscribe((getWords) => {
                                              let items = getWords.response[0].items;
                                              let i;
                                              this.words.length=0;
                                              for (i=0; i<items.length; ++i){
                                                  this.words.push(items[i]);
                                              }},
                                                  error => console.log(error));
      
                            }
                          },
                          error => console.log(error));
    }

  }

}
