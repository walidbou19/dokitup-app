import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { User } from '../../_models/user';
import { Companies } from '../../_models/companies';
import { CompaniesService } from '../shared/companies.service';
import { BasicValidators } from '../../shared/basic-validators';
import {ObjectRetriever} from '../../_models/objectRetriever';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css']
})

export class CompaniesFormComponent implements OnInit {

  form: FormGroup;
  title: string;
  user: User;
  company: Companies;

  constructor(private companiesService: CompaniesService, private router: Router, private route: ActivatedRoute, private location: Location, formBuilder: FormBuilder) {
      this.form = formBuilder.group({
          name: ['', [
              Validators.required,
              Validators.minLength(3)
          ]],
          address: ['', [
              Validators.required,
              Validators.minLength(20)
          ]],
          companyType: formBuilder.group({
              name: ['', Validators.minLength(3)]
          }),
          /*users: formBuilder.group({
              firstName: ['', Validators.minLength(3)],
              lastName: [],
              email: ['', [
                  Validators.required,
                  BasicValidators.email
              ]]
          })*/
      });
  }

  ngOnInit() {
    this.companiesService.getData()
        .subscribe(
            data => {
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
                    console.log(this.company.users);
                });
            },
            error => {});
  }

    goBack(): void {
        this.location.back();
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
