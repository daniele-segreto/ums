import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  users: User[] = [
    {
      name: 'Daniele1',
      lastname: 'Segreto1',
      email: 'daniele@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Torino',
      phone: '454545455',
      age: 33
    },
    {
      name: 'Daniele2',
      lastname: 'Segreto2',
      email: 'daniele@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Palermo',
      phone: '454545455',
      age: 33
    },
    {
      name: 'Daniele3',
      lastname: 'Segreto3',
      email: 'daniele@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Palermo',
      phone: '454545455',
      age: 33
    },
    {
      name: 'Daniele4',
      lastname: 'Segreto4',
      email: 'daniele@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Palermo',
      phone: '454545455',
      age: 33
    }
  ]

  getUsers() {
    return this.users
  }

  // La funzione riceve un oggetto "user" di qualsiasi tipo
  deleteUser(user: User){
    // Cerca e ritorna l'indice dell'oggetto "user" all'interno dell'array "this.users"
    const index = this.users.indexOf(user);
    // Se indexOf() non trova l'elemento ci ritorna -1
    // Se l'oggetto "user" viene trovato nell'array, procedi con la rimozione
    if (index > -1) {
      // Utilizza il metodo "splice" per rimuovere l'oggetto "user" dall'array "this.users"
      // "splice" accetta due parametri: l'indice dell'elemento da rimuovere e il numero di elementi da rimuovere (in questo caso 1)
      this.users.splice(index, 1)
    }
  }

}
