import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

//il faut ajouter "strictPropertyInitialization": false dans tsconfig.json 
  constructor() { }
  list:User[];
  //ngOnInit s'appelle hooks




  ngOnInit(): void {
    this.list=[
                {
                idUser: 1,
                firstName: "Mila",
                lastName: " Kunis",
                birthDate: "1999-06-30",
                accountCategory: "Admin",
                email: "mila@kunis.com",
                password: "test",
                picture: "https://bootdey.com/img/Content/avatar/avatar3.png",
                profession: "Software Engineer"
                },
                {
                idUser: 2,
                firstName: "George",
                lastName: "Clooney",
                birthDate: "1999-06-30",
                accountCategory: "Customer",
                email: "marlon@brando.com",
                password: "test",
                picture: "https://bootdey.com/img/Content/avatar/avatar2.png",
                profession: "Software Engineer"
                },
                {
                idUser: 3,
                firstName: "George",
                lastName: "Clooney",
                birthDate: "1999-06-30",
                accountCategory: "Customer",
                email: "marlon@brando.com",
                password: "test",
                picture: "https://bootdey.com/img/Content/avatar/avatar1.png",
                profession: "Software Engineer"
                },
                {
                idUser: 4,
                firstName: "Ryan",
                lastName: "Gossling",
                birthDate:"1999-06-30",
                accountCategory: "Golden",
                email: "Ryan@nicholson.com",
                password: "test",
                picture: "https://bootdey.com/img/Content/avatar/avatar4.png",
                profession: "Software Engineer"
                
                
                },
                {
                idUser: 5,
                firstName: "Robert",
                lastName: "Downey",
                birthDate: "1999-06-30",
                accountCategory: "Blocked Account",
                email: "robert@nicholson.com",
                password: "test",
                picture: "https://bootdey.com/img/Content/avatar/avatar5.png",
                profession: "Software Engineer"
                },
              ]
  }

  delete(user:User){
    let i=this.list.indexOf(user);
    this.list.splice(i,1);  
  }

  inputCategory:string;


}
