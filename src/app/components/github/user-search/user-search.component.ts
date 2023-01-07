import { UserService } from './../user.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../interface';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css'],
})
export class UserSearchComponent {
  searchTerm: string = '';
  @Output() user: EventEmitter<User> = new EventEmitter<User>();

  constructor(private service: UserService) {}

  searchUser() {
    this.service.getUser(this.searchTerm).subscribe((response) => {
      this.user.emit(response);
    });
  }
}
