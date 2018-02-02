import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from '../../_models/user';
import { Companies } from '../../_models/companies';
import { CompaniesService } from '../shared/companies.service';
import { BasicValidators } from '../../shared/basic-validators';
import {ObjectRetriever} from '../../_models/objectRetriever';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})

export class CompaniesDetailComponent implements OnInit {

  title: string;
  user: User;
  company: Companies;


  constructor(private companiesService: CompaniesService, private router: Router, private route: ActivatedRoute) {}


  ngOnInit() {
    this.companiesService.getData()
        .subscribe(
            data => {
                data.forEach(folder => {
                    ObjectRetriever.getObjectFromJSON(folder, 'folder');
                });
                this.route.params.subscribe(params => {
                    const id = params['id'];

                    this.title = id !== undefined ? 'Edit User' : 'New User';

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

  /*save() {
    var result,
        userValue = this.form.value;

    if (userValue.id){
      result = this.usersService.updateUser(userValue);
    } else {
      result = this.usersService.addUser(userValue);
    }

    result.subscribe(data => this.router.navigate(['users']));
  }*/
}
