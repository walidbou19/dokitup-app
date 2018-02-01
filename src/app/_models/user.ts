
export class User {
    public id: number;
    public firstName: string;
    public lastName: string;
    public email: string;
    private password: string;
    public role: any;
    public static allUsers: User[] = [];

    constructor(id: number, firstName: string, lastName: string, email: string, password: string, role: any) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.role = role;
        User.allUsers.push(this);
    }

    public getPassword() {
        return this.password;
    }
}