import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input('user-data') user: User | undefined;
  @Output('onDeleteUser') userDeleted = new EventEmitter(); // variabile che voglio usare per emettere l'evento (senza l'@Output l'evento non può essere ascoltato dal Parent, il decoratore @Output serve infatti a propagare questo evento al Parent)

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  deleteUser() {
    // alert(this.user.name + " " + this.user.lastname);
    // this.userService.deleteUser(this.user);
    this.userDeleted.emit(this.user) // chiamiamo l'evento userDeleted, chiamo il metodo emit per emettere l'evento e passo i dati che voglio passare al componente in ascolto, in questo caso l'utente che si vuole cancellare
  }

}
