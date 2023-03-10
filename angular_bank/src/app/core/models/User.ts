import 'src/app/core/models/UserType'
import { UserType } from 'src/app/core/models/UserType';

export class User {
    id:number;
    name:string;
    email:string;
    userType: UserType;

    constructor(id:number, name:string, email:string, userType: UserType){
        this.id = id;
        this.name = name,
        this.email = email;
        this.userType = userType;
    }

    /*toString():string {
      return "User [id=" + this.id + ", name=" + this.name + ", email=" + this.email + ", userType=" + this.userType + "]";
    }*/

}
