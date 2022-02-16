import { Component, OnInit } from '@angular/core';
import {BookService} from '../../services/book.service';
import {Book} from '../../models/Book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books:Book[] = [];

  constructor(private _bookService:BookService) { }

  ngOnInit(): void {
  }

  getBooks(){
    this._bookService.getBooks()
      //.then(data=>{ //this work with fetch
      .subscribe((data)=>{ //this work with HttpClient.get (angular module)
        console.log("book get:");
        console.log(data);
        console.log(data[0]);
        JSON.stringify(data);
        console.log(data);
        if (typeof data === 'string') {
          JSON.parse(data);
          console.log(data);
        }
        console.log("type: ")
        console.log(typeof data);
        console.log("WTFFFFFFFFFFFFFFFFFFFFFFFf ")
        // @ts-ignore
        for (let object of data){
          this.books.push(new Book(object['author'], object['title'], object['ageRestriction']))
        }

        //for(let i=0; i < data.lenght; i++){
        /*data.forEach(object=>{
          this.books.push(new Book(object.author, object.title, object.ageRestriction))
        });*/
      })
    /*
    * this._bookService.getBooks().then(data=>{
      this.books = data;
    });
    * */
  }

}
