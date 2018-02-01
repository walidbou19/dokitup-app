import {User} from './user';
import {Folder} from './folder';
import {Document} from './document';
import {Companies} from './companies';
import {Accesses} from './accesses';
import {AccessType} from './access-type';
import {CompanyType} from './company-type';

export class ObjectRetriever {

    public static getObjectFromJSON = function(jsonData:any, modelType: string, f: Folder = null) {
        let object = null;
        switch(modelType) {
            case 'user':
                object = new User(jsonData.id, jsonData.firstName, jsonData.lastName, jsonData.email, jsonData.password, jsonData.role);
                break;
            case 'folder':
                object = new Folder(jsonData.id, jsonData.name, [], [],
                            this.getObjectFromJSON(jsonData.createdBy, 'user'),
                            jsonData.createdAt,
                            this.getObjectFromJSON(jsonData.updatedBy, 'user'),
                            jsonData.updatedAt);

                jsonData.accesses.forEach(access => {
                    object.addAccess(this.getObjectFromJSON(access, 'accesses'));
                });
                jsonData.docs.forEach(doc => {
                    object.addDocument(this.getObjectFromJSON(doc, 'document'));
                });
                break;
            case 'document':
                const document =  jsonData.folder == null ? f :  jsonData.folder;
                object = new Document(jsonData.id, jsonData.fileName, jsonData.fileUrl, jsonData.boolViewer, jsonData.boolOwner, document);
                break;
            case 'accesses':
                object = new Accesses(jsonData.id, this.getObjectFromJSON(jsonData.accessType, 'accessType'), [], jsonData.createdBy);
                jsonData.companies.forEach(company => {
                    object.addCompany(this.getObjectFromJSON(company, 'companies'));
                });
                break;
            case 'companies':
                object = new Companies(jsonData.id, jsonData.name, jsonData.address, this.getObjectFromJSON(jsonData.companyType , 'companyType'), []);
                jsonData.users.forEach(user => {
                    object.addUser(this.getObjectFromJSON(user, 'user'));
                });
                break;
            case 'accessType':
                object = new AccessType(jsonData.name);
                break;
            case 'companyType':
                object = new CompanyType(jsonData.name);
                break;
        }
        return object;
    }
}