import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppMaterialModule } from './app-material/app-material.module'
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'hammerjs';
import { MDBBootstrapModule} from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MatIconRegistry } from '@angular/material';
import { ContactComponent } from './contact/contact.component';
import { SearchComponent } from './search/search.component';
import { NewsComponent } from './news/news.component';
import { FeedService } from './services/feed.service';
import { StripHtmlTagsPipe } from './pipe/strip-html-tags.pipe';
import { CategoryComponent } from './category/category.component';
import { wordUrl, apiUrl } from './data-model/baseurl';
import { ProcessHttpmsgService } from './services/process-httpmsg.service';
import { RestangularModule, Restangular } from 'ngx-restangular'; 
import { RestangularConfigFactory} from './data-model/restConfig';
import { CategoryService } from './services/category.service';
import { AgmCoreModule} from '@agm/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FeedbackComponent } from './feedback/feedback.component';
import { SearchService } from './services/search.service';
import { SearchFormComponent } from './search-form/search-form.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageItemComponent } from './message-item/message-item.component';
import { MessageFormComponent } from './message-form/message-form.component';
import { DialogflowService } from './services';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    SearchComponent,
    NewsComponent,
    StripHtmlTagsPipe,
    CategoryComponent,
    FeedbackComponent,
    SearchFormComponent,
    MessageListComponent,
    MessageItemComponent,
    MessageFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    AppRoutingModule,
    HttpModule,
    RestangularModule.forRoot(RestangularConfigFactory),
    AgmCoreModule.forRoot({apiKey: ''}),
    MDBBootstrapModule.forRoot(),
    NgbModule.forRoot()
  ],
  schemas:[NO_ERRORS_SCHEMA],
  entryComponents: [
    FeedbackComponent
  ],
  providers: [
    FeedService,
    CategoryService,
    SearchService,
    {provide: 'apiUrl', useValue: apiUrl},
    {provide: 'wordUrl', useValue: wordUrl},
    ProcessHttpmsgService,
    DialogflowService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  public constructor (public matIconRegistry: MatIconRegistry) {
    matIconRegistry.registerFontClassAlias('fa');
  }
}
