import { User } from './components/github/interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'git-search-angular';
  user: User = {
  }
  getTerm(takeUser: User) {
    this.user = takeUser;
  }
}
