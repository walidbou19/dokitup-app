import {User} from './user';
import {Folder} from './folder';
import {CompanyType} from './company-type';

export class Companies {
    public static allCompanies: Companies[] = [];
    public id: string;
    public name: string;
    public address: string;
    public companyType: CompanyType;
    public users: User[];

    constructor(id: string, name: string, address: string, companyType: CompanyType, users: User[]) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.companyType = companyType;
        this.users = users;
        if (!Companies.hasItem(this))
            Companies.allCompanies.push(this);
    }

    public static hasItem(company: Companies) {
        for (let i=0; i < Companies.allCompanies.length; i++)
            if (Companies.allCompanies[i].id == company.id) return true;
        return false;
    }

    public addUser(user: User) {
        this.users.push(user);
    }

}