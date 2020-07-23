import { Component, OnInit } from '@angular/core';
import {IBook} from '../IBook';
import {ProductService} from '../product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  bookList: IBook[] = [];
  numberOfBooks: number;
  constructor(private bookService: ProductService,
              public router: Router) { }

  ngOnInit(): void {
    this.bookService.getAll().subscribe(value => {this.bookList = value; this.numberOfBooks = this.bookList.length; });
    this.bookService.shouldRefresh.subscribe(result => {
      this.bookService.getAll().subscribe(value => this.bookList = value); this.numberOfBooks = this.bookList.length;
    });
  }

  deleteProduct(id): void {
    const verify = confirm('Bạn có chắc chắn muốn xóa?');
    if (verify){
      this.bookService.delete(id).subscribe(() => {
        this.bookService.shouldRefresh.next(); this.numberOfBooks = this.bookList.length;
      });
    }
  }
}
