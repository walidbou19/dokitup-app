import { Component, OnInit } from '@angular/core';
import {UsersService} from './shared/users.service';
import {User} from '../_models/user';
import {Companies} from '../_models/companies';
import {Folder} from '../_models/folder';
import {ObjectRetriever} from '../_models/objectRetriever';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private folders: Folder[] = [];
  private users: User[] = [];
  private allCompanies: Companies[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.getUsers()
        .subscribe(
            data => {
                data.forEach(folder => {
                    this.folders.push(ObjectRetriever.getObjectFromJSON(folder, 'folder'));
                    //this.users.push(ObjectRetriever.getObjectFromJSON(folder.users, 'user'));
                });
                console.log(this.folders);
                this.allCompanies = Companies.allCompanies;
            },
            error => {});
  }
/*
  deleteUser(user){
    if (confirm('Are you sure you want to delete ' + user.name + '?')) {
      var index = this.users.indexOf(user);
      this.users.splice(index, 1);

      this.usersService.deleteUser(user.id)
        .subscribe(null,
          err => {
            alert('Could not delete user.');
            // Revert the view back to its original state
            this.users.splice(index, 0, user);
          });
    }
  }*/

}
