import { Component, OnInit } from '@angular/core';
import {CompaniesService} from './shared/companies.service';
import {User} from '../_models/user';
import {Companies} from '../_models/companies';
import {Folder} from '../_models/folder';
import {ObjectRetriever} from '../_models/objectRetriever';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  private folders: Folder[] = [];
  private users: User[] = [];
  private allCompanies: Companies[] = [];

  constructor(private companiesService: CompaniesService) {}

  ngOnInit() {
    this.companiesService.getData()
        .subscribe(
            data => {
                data.forEach(folder => {
                    this.folders.push(ObjectRetriever.getObjectFromJSON(folder, 'folder'));
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
