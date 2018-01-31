import { Component, OnInit } from '@angular/core';
import {UsersService} from './shared/users.service';
import {User} from '../_models/user';
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

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.getUsers()
        .subscribe(
            data => {
                //console.log('folders');
                //console.log(typeof(this.folders[0].createdBy));
                //console.log(this.folders[0]);
                data.forEach(folder => {
                    this.folders.push(ObjectRetriever.getObjectFromJSON(folder, 'folder'));
                    this.users.push(ObjectRetriever.getObjectFromJSON(folder.createdBy, 'user'));
                });
                console.log(this.folders);
            },
            error => {});
  }

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
  }

}
