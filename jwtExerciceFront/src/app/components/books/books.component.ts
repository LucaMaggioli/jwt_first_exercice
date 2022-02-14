import { Component, OnInit } from '@angular/core';
import {BookService} from '../../services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books:any;

  constructor(private _bookService:BookService) { }

  ngOnInit(): void {
  }

  getBooks(){
    this._bookService.getBooks()
      .subscribe(data=>{
        console.log(data);
        this.books = data;
      })
    /*
    * this._bookService.getBooks().then(data=>{
      this.books = data;
    });
    * */
  }

}
