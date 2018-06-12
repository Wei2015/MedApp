import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ContactComponent } from '../contact/contact.component';
import { SearchComponent } from '../search/search.component';
import { NewsComponent } from '../news/news.component';
import { SearchFormComponent} from '../search-form/search-form.component'
import { FeedbackComponent } from '../feedback/feedback.component';


export const routes: Routes = [

  { path: 'home',  component: HomeComponent },
  { path: '',  redirectTo: '/home', pathMatch: 'full'},
  { path: 'contactus', component: ContactComponent},
  { path: 'search', component: SearchFormComponent},
  { path: 'news', component: NewsComponent},
  { path: 'chatbot', component: FeedbackComponent}
];