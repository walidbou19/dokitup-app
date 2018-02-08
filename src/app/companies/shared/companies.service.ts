import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Companies} from '../../_models/companies';
import {Location} from '../../_services/location';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CompaniesService {

  // private url: string = 'http://jsonplaceholder.typicode.com/companys';

  private url: string = Location.getCompanyJSON();

  constructor(private http: Http) { }

  getData() {
      return this.http.get(this.url)
          .map(res => res.json());
  }

  getCompanies(){
    return Companies.allCompanies;
  }

  getCompany(id) {
      return Companies.allCompanies.filter(company => {
          return company.id === id;
      });
  }

  addComapany(company) {
    return this.http.post(this.url, JSON.stringify(company))
      .map(res => res.json());
  }

  updateComapany(company) {
    return this.http.put(this.getCompanyUrl(company.id), JSON.stringify(company))
      .map(res => res.json());
  }

  deleteComapany(id) {
    return this.http.delete(this.getCompanyUrl(id))
      .map(res => res.json());
  }

  private getCompanyUrl(id){
    return this.url + '/' + id;
  }
}
