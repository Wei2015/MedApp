import { Component, OnInit } from '@angular/core';
import { FeedService } from '../services/feed.service';
import { FeedEntry } from '../data-model/feed-entry';

import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  private alzheimer: string = 'https%3A%2F%2Frss.medicalnewstoday.com%2Falzheimers.xml';
  private aids: string = 'https%3A%2F%2Frss.medicalnewstoday.com%2Fhiv%2Daids.xml';
  private feedUrl1 :string = 'http%3A%2F%2Fwww.sciencedaily.com%2Frss%2Ftop%2F/health.xml';
  private feedUrl2 :string = 'https%3A%2F%2Fwww.medicinenet.com%2Frss%2Fdailyhealth.xml';
  private feedUrl3 :string = 'http%3A%2F%2Fgetbetterhealth.com%2Fchannel%2Fnews%2Ffeed%2F';

  private alzheimerFeeds: Array<FeedEntry> = [];
  private aidsFeeds: Array<FeedEntry> = [];
  private feeds1: Array<FeedEntry> = [];
  private feeds2: Array<FeedEntry> = [];
  private feeds3: Array<FeedEntry> = [];

  
  constructor( private feedService: FeedService) {
   
   }

  ngOnInit() {
    this.refreshFeed();
  }

  public refreshFeed() {
    this.aidsFeeds.length = 0;
    this.feedService.getFeedContent(this.aids)
       .subscribe(
         feed => this.aidsFeeds = feed.items,
         error => console.log(error));



    this.alzheimerFeeds.length = 0;
    this.feedService.getFeedContent(this.alzheimer)
       .subscribe(
         feed => this.alzheimerFeeds = feed.items,
         error => console.log(error));


    this.feeds1.length = 0;
    this.feedService.getFeedContent(this.feedUrl1)
       .subscribe(
         feed => this.feeds1 = feed.items,
         error => console.log(error));

    this.feeds2.length = 0;
    this.feedService.getFeedContent(this.feedUrl2)
       .subscribe(
         feed => this.feeds2 = feed.items,
         error => console.log(error));

    this.feeds3.length = 0;
    this.feedService.getFeedContent(this.feedUrl3)
       .subscribe(
         feed => this.feeds3 = feed.items,
         error => console.log(error));
  }

}
