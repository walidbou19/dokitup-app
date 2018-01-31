
export class User {
    public firstName: string;
    public lastName: string;
    public email: string;
    private password: string;
    public role: any;

    constructor(firstName: string, lastName: string, email: string, password: string, role: any) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.role = role;
    }

    public getPassword() {
        return this.password;
    }
}