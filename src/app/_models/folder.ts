import {User} from './user';
import {Document} from './document';

export class Folder {
    public id: string;
    public name: string;
    public accesses: any[];
    public docs: Document[];
    public createdBy: User;
    public createdAt: Date;
    public updatedBy: User;
    public updatedAt: Date;

    public constructor(id: string, name: string,
                       accesses: any[], docs: Document[],
                       createdBy: User, createdAt: Date,
                       updatedBy: User, updatedAt: Date) {
        this.id = id;
        this.name = name;
        this.accesses = accesses;
        this.docs = docs;
        this.createdBy = createdBy;
        this.createdAt = createdAt;
        this.updatedBy = updatedBy;
        this.updatedAt = updatedAt;
    }

    public getDocuments() {
        return this.docs;
    }
    public addDocument(doc: Document) {
        this.docs.push(doc);
    }
    public setDocuments(docs: Document[]) {
        this.docs = docs;
    }

}