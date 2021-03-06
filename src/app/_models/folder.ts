﻿import {User} from './user';
import {Accesses} from './accesses';
import {Document} from './document';

export class Folder {
    public id: string;
    public name: string;
    public accesses: Accesses[];
    public docs: Document[];
    public createdBy: User;
    public createdAt: Date;
    public updatedBy: User;
    public updatedAt: Date;
    public static allFolders: Folder[] = [];

    public constructor(id: string, name: string,
                       accesses: Accesses[], docs: Document[],
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
        if (!Folder.hasItem(this))
            Folder.allFolders.push(this);
    }

    public static hasItem(folder: Folder) {
        for (let i=0; i < Folder.allFolders.length; i++)
            if (Folder.allFolders[i].id == folder.id) return true;
        return false;
    }

    public getDocuments() {
        return this.docs;
    }
    public addDocument(doc: Document) {
        this.docs.push(doc);
    }
    public addAccess(access: Accesses) {
        this.accesses.push(access);
    }
    public setDocuments(docs: Document[]) {
        this.docs = docs;
    }

}