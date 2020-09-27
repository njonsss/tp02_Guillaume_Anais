export class User {

  id: number;
  Lastname:string;
  Firstname:string;
  Address:string;
  ZipCode:string;
  City:string;
  Country:string;
  phone:string;
  email:string;
  // password in a single
  password:{
    pwd:string;
    confirmPwd:string;
  };
  gender:string;
  terms:boolean;

  constructor(values: Object = {}) {
    //Constructor initialization
    Object.assign(this, values);
  }
}
