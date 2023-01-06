import { UserService } from './../user.service';
import { Component } from '@angular/core';
import { User } from '../interface';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  searchTerm: string = '';
  user: User = {
    login: '',
    avatar_url: '',
    name: '',
    company: '',
    blog: '',
    location: '',
    bio: '',
    public_repos: 0,
    followers: 0,
    following: 0,
    created_at: new Date(),
    updated_at: new Date()
  }

  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.service.getUser('laisfsgomes').subscribe((response) => {
      this.user = response;
    });
  }

  searchUser() {
    this.service.getUser(this.searchTerm).subscribe((response) => {
      this.user = response;
    });
  };
}
