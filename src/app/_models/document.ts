import {Folder} from './folder';

export class Document {
    id: string;
    fileName: string;
    fileUrl: string;
    boolViewer: boolean;
    boolOwner: boolean;
    folder: Folder;

    constructor(id: string, fileName: string,  fileUrl: string, boolViewer: boolean, boolOwner: boolean, folder: Folder) {
        this.id = id;
        this.fileName = fileName;
        this.fileUrl = fileUrl;
        this.boolViewer = boolViewer;
        this.boolOwner = boolOwner;
        this.folder = folder;
    }
}