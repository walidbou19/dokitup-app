import {User} from './user';
import {Companies} from './companies';
import {AccessType} from './access-type';

export class Accesses {
    public id: string;
    public accessType: AccessType;
    public companies: Companies[];
    public createdBy: User;

    constructor(id: string, accessType: AccessType, companies: Companies[], createdBy: User) {
        this.id = id;
        this.accessType = accessType;
        this.companies = companies;
        this.createdBy = createdBy;
    }

    public addCompany(company: Companies) {
        this.companies.push(company);
    }
}