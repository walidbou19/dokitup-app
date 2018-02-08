import { environment } from '../../environments/environment';

export class Location {
    private static baseHref: string = (environment.production) ? '/symfony/front' : '';
    private static relativePath: string = '/assets/data/';

    private static authJSON: string = Location.relativePath + 'login_post_Request.json';
    private static companyJSON: string = Location.relativePath + 'folder_get_Response_HTTP_OK.json';

    public static getAuthenticationJSON() {
        return Location.baseHref + Location.authJSON;
    }
    public static getCompanyJSON() {
        return Location.baseHref + Location.companyJSON;
    }
}