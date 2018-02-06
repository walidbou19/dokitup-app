import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { User } from '../../_models/user';
import { Companies } from '../../_models/companies';
import { CompaniesService } from '../shared/companies.service';
// import { BasicValidators } from '../../shared/basic-validators';
import {ObjectRetriever} from '../../_models/objectRetriever';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})

export class ListUsersComponent implements OnInit {
  title: string;
  user: User;
  company: Companies;

  constructor(private companiesService: CompaniesService, private router: Router, private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    this.companiesService.getData()
        .subscribe(
            data => {
                console.log(data);
                if (Companies.allCompanies.length === 0) {
                    data.forEach(folder => {
                        ObjectRetriever.getObjectFromJSON(folder, 'folder');
                    });
                }
                this.route.params.subscribe(params => {
                    const id = params['id'];

                    this.title = id !== undefined ? 'Detail User' : 'Detail User';

                    if (!id)
                        return;

                    const foundCompanies: Companies[] = this.companiesService.getCompany(id);
                    if (foundCompanies.length === 0) {
                        this.router.navigate(['NotFound']);
                    } else {
                        this.company = foundCompanies[0];
                    }
                    console.log(this.company);
                });
            },
            error => {});
  }
    goBack(): void {
         this.location.back();
     }
}
