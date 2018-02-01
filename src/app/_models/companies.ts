import {User} from './user';
import {CompanyType} from './company-type';

export class Companies {
    public id: string;
    public name: string;
    public address: string;
    public companyType: CompanyType;
    public users: User[];
    public static allCompanies: Companies[] = [];

    constructor(id: string, name: string, address: string, companyType: CompanyType, users: User[]) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.companyType = companyType;
        this.users = users;
        Companies.allCompanies.push(this);
    }

    public addUser(user: User) {
        this.users.push(user);
    }
}