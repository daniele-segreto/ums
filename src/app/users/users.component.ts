import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  title = 'Users'
  users: User[] = [];

  constructor(private service: UserService) {}

  ngOnInit(): void {
    this.users = this.service.getUsers();
  }

  // Ricevo un utente di tipo any e vado a chiamare il servizio + la funzione deleteUser() + passo come parametro user.
  onDeleteUser(user: User) {
    this.service.deleteUser(user);
  }

}
