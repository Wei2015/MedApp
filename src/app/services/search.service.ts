import { Injectable, Inject} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { GetInfo } from '../data-model/getInfo';
import { GetWords } from '../data-model/getWords';

@Injectable()
export class SearchService {


  constructor(private http: Http,
    @Inject('apiUrl') private apiUrl,
    @Inject('wordUrl') private wordUrl) { }


  getByTagByTime(tag: String, start_date: String, end_date: String, limit: String): Observable<GetInfo> {
    return this.http.get(this.apiUrl+"?start_d="+start_date +"&limit_n="+limit
                                        +"&tag="+tag+"&end_d="+end_date)
            .map(this.extractInfo)
            .catch(this.handleError);
  }

  getByKeywordByTime(key_word: String, start_date: String, end_date: String, limit: String) {
    return this.http.get(this.apiUrl+"/date?start_d="+start_date + "&end_d=" + end_date
                                      +"&k_word="+key_word+"&limit_n="+limit)
            .map(this.extractInfo)
            .catch(this.handleError);

  }

  getRelatedWord(inputWord: String){
    return this.http.get(this.wordUrl+"&text="+inputWord + "&limit=5" + "&pos=noun" + "&lang=en")
            .map(this.extractWord)
            .catch(this.handleError);
  }


  private extractInfo(res: Response): GetInfo {
    let getInfo = res.json();
    return getInfo || { };
  }

  private extractWord(res: Response): GetWords {
    let getWords = res.json();
    return getWords || { };
  }

  private handleError (error: any) {
    
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
