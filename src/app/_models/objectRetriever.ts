import {User} from './user';
import {Folder} from './folder';
import {Document} from './document';

export class ObjectRetriever {

    public static getObjectFromJSON = function(jsonData:any, modelType: string, f: Folder = null) {
        let object = null;
        switch(modelType) {
            case 'user':
                object = new User(jsonData.firstName, jsonData.lastName, jsonData.email, jsonData.password, jsonData.role);
                break;
            case 'folder':
                object = new Folder(jsonData.id, jsonData.name, jsonData.accesses, [],
                            this.getObjectFromJSON(jsonData.createdBy, 'user'),
                            jsonData.createdAt,
                            this.getObjectFromJSON(jsonData.updatedBy, 'user'),
                            jsonData.updatedAt);

                jsonData.docs.forEach(doc => {
                    object.addDocument(this.getObjectFromJSON(doc, 'document'));
                });
                break;
            case 'document':
                const document =  jsonData.folder == null ? f :  jsonData.folder;
                object = new Document(jsonData.id, jsonData.fileName, jsonData.fileUrl, jsonData.boolViewer, jsonData.boolOwner, document);
                break;
        }
        return object;
    }
}