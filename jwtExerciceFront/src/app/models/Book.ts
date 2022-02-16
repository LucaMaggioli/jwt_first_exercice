export class Book{

  public author:string;
  public title:string;
  public ageRestriction?:boolean;

  constructor(_author: string, _title: string, _ageRestriction?:boolean) {
    this.author = _author;
    this.title = _title;
    this.ageRestriction = _ageRestriction;
  }
}
