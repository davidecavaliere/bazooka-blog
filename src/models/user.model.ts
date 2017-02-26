export class User {
  public id: string;
  public name : string = 'Guest';
  public email : string;
  public role : string = 'Guest';



  constructor(user?: any) {
    Object.assign(this, user);
    console.log('Initing new instance of User model', this);
  }
}
